import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import 'babel-polyfill';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    ReactDOM.render(<App />, container);
});