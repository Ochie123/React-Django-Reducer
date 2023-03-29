import useContextSelector from "../useContextSelector";
const React = require('react')
import CategoryContext from '../context/CategoryContext';

function useCategory(selector, selectMultiple) {
  return useContextSelector(CategoryContext, selector, selectMultiple);
}

export default useCategory;
