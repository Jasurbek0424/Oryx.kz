import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LayoutNav from './components/Layout/LayoutNav.tsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.tsx'
import Whatsapp from './components/Whatsapp.tsx'
import LayoutFooter from './components/Footer/LayoutFooter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutNav />
      <App />
      <ScrollToTop />
      <Whatsapp />
      <LayoutFooter />
    </BrowserRouter>
  </React.StrictMode>,
)
