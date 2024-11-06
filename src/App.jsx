import React from "react"
import './assets/scss/app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginProvider } from "./context/LoginContext";
import { NotificationProvider } from "./context/NotificationContext";
import { CartProvider } from "./context/CartProvider";
import Header from "./layouts/header/Header"
import Home from "./pages/home/Home"
import Footer from "./layouts/footer/Footer";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductDetail from "./pages/detail/ProductDetail";
import Cart from "./pages/cart/Cart";
import Listing from "./pages/listing/Listing";
import Payment from "./pages/payment/Payment";
import CheckOut from "./pages/checkout/CheckOut";
import Profile from "./pages/profile/Profile";

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
              <Route path='/payment' element={<Payment />} />
              <Route path='/checkout' element={<CheckOut />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </LoginProvider>
      <Footer />
    </Router>
  )
}

export default App
