const React = require('react')

import { createContext } from "use-context-selector";

const CategoryContext = createContext({ state: {}, actions: {} });

export default CategoryContext;
