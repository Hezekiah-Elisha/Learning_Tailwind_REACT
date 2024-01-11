import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/AboutPage';
import Home from './pages/HomePage';
import OneHomePage from './pages/OneHomePage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="*" element={<h1>Not Found</h1>} />  {/* 404 page */}
        <Route path='/one-home' element={ <OneHomePage /> } />
        <Route path='/sign-in' element={ <Signin /> } />
        <Route path='/sign-up' element={ <Signup /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
