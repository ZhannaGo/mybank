import React from 'react';
import { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import { CurrentUser, UserContext } from './context'
import App from './App';
import reportWebVitals from './reportWebVitals';
import AllData from './alldata';
import Balance from './balance';
import Card from './context';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Home from './home';
import Login from './login';
import NavBar from './navbar';
import Withdraw from './withdraw';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


