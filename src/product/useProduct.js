import useContextSelector from "../useContextSelector";
const React = require('react')
import ProductContext from '../context/context'

function useProduct(selector, selectMultiple) {
  return useContextSelector(ProductContext, selector, selectMultiple);
}

export default useProduct;
