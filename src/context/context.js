const React = require('react')

import { createContext } from "use-context-selector";

const ProductContext = createContext({ state: {}, actions: {} });

export default ProductContext;
