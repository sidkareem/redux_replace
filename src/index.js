import React from 'react';
import ReactDOM from 'react-dom';
import ProductProvider from './context/context-prod';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import confstore from './hooks-store/product-store';
//const rootReducer = combineReducers({
 // shop: productReducer
//});

//const store = createStore(rootReducer);

ReactDOM.render(
  <ProductProvider>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>
   
  ,
  document.getElementById('root')
);
