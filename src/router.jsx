// IMPORT REACT LIBRARIES =========================================//
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// IMPORT COMPONENTS =============================================//
import App from './App.jsx'
//import About from './pages/About';
import Header from './layout/Header';
import Footer from './layout/Footer';
// IMPORT STYLES =================================================//
import './scss/App.scss'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/about" component={About} /> */}
      </Routes>
      <Footer/>
  </Router> 
  </StrictMode>,
)
