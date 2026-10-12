import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ShopProvider } from './Components/Context/ShopContext';
import './index.css';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopProvider>
        <App />
    {/* Vercel Deployment */}
        <Analytics />
      </ShopProvider>
    </BrowserRouter>
  </React.StrictMode>
);
