import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/auth-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </AuthContextProvider>
)
