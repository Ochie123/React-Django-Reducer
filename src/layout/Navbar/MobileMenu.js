import React from 'react';
import './MobileMenu.scss';

import { CategoryProvider, CategoryList } from '../../category'



export default function MobileMenu() {
  const items = ['Apples', 'Pears', 'Playstations'];
  const [show, setShow] = React.useState(false);

  return (
    <div className="main-menu-mobile self-center">
      <a className="menu-icon" href="#" onClick={(e) => { e.preventDefault(); setShow(!show); }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </a>
      {show && (
            <CategoryProvider>
            
       
          
        <ul className="nav justify-content-center">
  
        {items.map((item) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="nav-item" key={item}>
            <a className="nav-link hover:underline" href={item.url}>{item}<CategoryList/></a>
            </li>
          ))}
        </ul>
        </CategoryProvider>
      )}
    </div>
  );
}

export const layout = {
  areaId: 'icon-wrapper',
  sortOrder: 50
};

export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
}`;
