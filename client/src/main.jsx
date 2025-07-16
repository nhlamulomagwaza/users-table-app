import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss';
import AppContext from './store/AppContext.jsx';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router';
import { Routes } from 'react-router';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppContext>
    <App />
    <Toaster />
    </AppContext>
    </BrowserRouter>
  </StrictMode>,
)
