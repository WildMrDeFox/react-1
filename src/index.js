import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Misha'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Nice, and you?'},
    {id: 4, message: 'I am fine'},
    {id: 5, message: 'Good'},
]


ReactDOM.render(
  <React.StrictMode>
    <App dialog={dialogsData} message={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
