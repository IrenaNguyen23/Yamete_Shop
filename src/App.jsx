import React from "react"
import './assets/scss/app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./layouts/header/Header"
import Home from "./pages/home/Home"
import Footer from "./layouts/footer/Footer";
import Login from "./pages/auth/Login";
import { LoginProvider } from "./context/LoginContext";
import Register from "./pages/auth/Register";
import ProductDetail from "./pages/detail/ProductDetail";
import { NotificationProvider } from "./context/NotificationContext";
import { CartProvider } from "./context/CartProvider";
import Cart from "./pages/cart/Cart";
import Listing from "./pages/listing/Listing";

function App() {

  return (
    <Router>
      <Header />
      <LoginProvider>
        <NotificationProvider>
          <CartProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/detail' element={<ProductDetail />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/listing' element={<Listing />} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </LoginProvider>
      <Footer />
    </Router>
  )
}

export default App
