/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import React from 'react';

import useProduct from '../product/useProduct';
//import context from '../product/context'

function Area(props) {
  const {
    id, coreComponents, wrapperProps, noOuter, wrapper, className, components
  } = props;

  const areaComponents = (() => {
    const areaCoreComponents = coreComponents || [];
    const cs = components[id] === undefined
      ? areaCoreComponents
      : areaCoreComponents.concat(Object.values(components[id]));

    return cs.sort((obj1, obj2) => obj1.sortOrder - obj2.sortOrder);
  })();

  // eslint-disable-next-line no-nested-ternary
  const WrapperComponent = noOuter !== true ? (wrapper !== undefined ? wrapper : 'div') : React.Fragment;

  let areaWrapperProps = {};
  if (noOuter === true) {
    areaWrapperProps = {};
  } else if (typeof wrapperProps === 'object' && wrapperProps !== null) {
    areaWrapperProps = { className: className || '', ...wrapperProps };
  } else {
    areaWrapperProps = { className: className || '' };
  }

  const context = useProduct();

  return (
    <WrapperComponent {...areaWrapperProps}>
      {areaComponents.map((w, index) => {
        const C = w.component.default;
        const { id } = w;
        const { propsMap } = context;
        const propsData = context.context;
        const propKeys = propsMap[id] || [];
        const componentProps = propKeys.reduce((acc, map) => {
          const { origin, alias } = map;
          acc[origin] = propsData[alias];
          return acc;
        }, {});
        if (w.props) {
          Object.assign(componentProps, w.props);
        }
        if (typeof C === 'string') return <C key={index} {...componentProps} />;
        return <C key={index} areaProps={props} {...componentProps} />;
      })}
    </WrapperComponent>
  );
}


export default Area;
