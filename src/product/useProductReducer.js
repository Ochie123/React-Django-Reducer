const React = require('react')
import produce from "immer";
import { useEffect, useReducer,useState, useMemo } from "react";

import useReduction from "use-reduction";
import initialState from './fixture'

const URL = "http://127.0.0.1:8000/api/products/";

const reducer = {
  loading: (state, { payload, productId }) => ({
    ...state,
    status: "LOADING",
  }),
  failure: (state, { payload }) => ({
    ...state,
    status: "ERROR",
    error: payload,
  }),
  success: (state, { payload }) => ({
    ...state,
    status: "SUCCESS",
    products: payload,
  }),
};


function getInitialState() {
  const products =
    JSON.parse(localStorage.getItem("product-manager-items")) || initialState;
  return {
    expandedId: null,
    products,
  };
}


function useProductReducer() {
  const initialState = useMemo(getInitialState, []);
  const [state, actions] = useReduction(initialState, reducer);

  useEffect(() => {
    actions.loading();
    fetch(`http://127.0.0.1:8000/api/products/`)
      .then((res) => res.json())
      .then(({ products }) => actions.success(products))
      .catch(({ message }) => actions.failure(message));
    }, [actions, state.products]);


  return {
    state,
    actions,
  };
}

export default useProductReducer;
