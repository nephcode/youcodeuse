// IMPORT REACT LIBRARIES =========================================//
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// IMPORT LAYOUT =================================================//
import Header from './layout/Header';
import Footer from './layout/Footer';
// IMPORT PAGES ==================================================//
import Home from './pages/Home';
// IMPORT STYLES =================================================//
import './scss/router.scss';
// RENDER APPLICATION ============================================//
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
// END OF APPLICATION RENDER =====================================//
