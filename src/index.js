import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';         // Default  imports & expots
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"

// as ->renaming
// HashRouter -> URL will contain #

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// 1.BrowserRouter - Modern browser -Added features
// 2.HashRouter - Older browser (IE)- less features

// router setup
// 1.import router
// 2.wrap in app use with <Router><Router/> 