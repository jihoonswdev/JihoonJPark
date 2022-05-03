import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'
import './index.css'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('App');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

// ReactDom.render(<App/>, document.querySelector('#root'));
