import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import Area from '../../Area';
import useProduct from '../../../product/useProduct';
import  PriceFilter from './PriceFilter';
//import { useAppDispatch } from '../../../../../lib/context/app';
import './Filter.scss';

export const FilterDispatch = React.createContext();

export default function Filter() {
  const products = useProduct(
    ({ state: { products } }) => products.map(({ id }) => id),
    true
  );
  const [category, setCategory] = useState(false);
  const [isOpen, setIsOpen] = useState(false);



  return <FilterDispatch.Provider value={{ updateFilter }}>
    <div className={`product-filter-tool hidden md:block ${isOpen ? 'opening' : 'closed'}`}>
      <div className="filter-heading">
        <span className="font-bold ">SHOP BY</span>
      </div>
      <Area
        id="productFilter"
        noOuter={true}
        priceRange={priceRange}
  
      />
      <a className="filter-closer flex md:hidden" href="#" onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      </a>
    </div>
    <a className="filter-opener flex md:hidden" href="#" onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    </a>
  </FilterDispatch.Provider>
}



export const useFilterDispatch = () => React.useContext(FilterDispatch);
