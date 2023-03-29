import { useEffect, useMemo } from "react";
import useReduction from "use-reduction";

import initialState from './fixtures';

const URL = "http://127.0.0.1:8000/api/categories/";

const reducer = {
  loading: (state, { payload, categoryId }) => ({
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
    categories: payload,
  }),
};

function getInitialState() {
  const categories =
    JSON.parse(localStorage.getItem("category-manager-items")) || initialState;
  return {
    expandedId: null,
    categories,
  };
}

function useCategoryReducer() {
  const initialState = useMemo(getInitialState, []);
  const [state, actions] = useReduction(initialState, reducer);

  useEffect(() => {
    actions.loading();
    fetch(URL)
      .then((res) => res.json())
      .then(({ categories }) => actions.success(categories))
      .catch(({ message }) => actions.failure(message));
  }, [actions, state.categories]);

  return {
    state,
    actions,
  };
}

export default useCategoryReducer;
