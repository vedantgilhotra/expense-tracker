import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from "./reducers";
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

var store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


