import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Products from './components/Products.jsx'
import Caraousel from './components/Caraousel.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
 
    <Hero />
    <Products />
    <Caraousel />
    <Footer />
  </React.StrictMode>,
)
