import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from "./components/Footer";
import {Navbarcomponent} from "./components/Navbar";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Navbarcomponent />
    <App />
      <Footer />
  </React.StrictMode>
);

