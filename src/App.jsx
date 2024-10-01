import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductPage from "./pages/ProductPage";
import RecipesPage from "./pages/RecipesPage";
import KidsPage from "./pages/KidsPage";
import ContactPage from "./pages/ContactPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about-us" element={<AboutPage />} />
          <Route exact path="/products" element={<ProductPage />} />
          <Route exact path="/recipes" element={<RecipesPage />} />
          <Route exact path="/kids" element={<KidsPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App

