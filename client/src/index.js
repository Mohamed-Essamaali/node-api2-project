import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import MyContextProvider from './Contexts/index.js'
console.log(MyContextProvider)

ReactDOM.render(
  <Router>
  <MyContextProvider >
    <App />
 </MyContextProvider>
  </Router>,
  document.getElementById('root')
);


