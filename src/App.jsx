import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { BasketProvider } from './contexts/BasketContext';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Product from './pages/Product';
import Basket from './pages/Basket';
import CartSummary from './components/CartSummary';
// import './App.css'; 
import './AppDaisay.css'; 

function App() {
  
  return (
    <BasketProvider>
      <Router>
        <nav>
          <div>
            <Link to="/" class = "font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Home</Link> |
            <Link to="/products">Shop</Link> |
            <Link to="/basket" class = "font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Basket</Link>
          </div>
          <div>
            <CartSummary />
          </div>
        </nav>
        <div className="container">
          <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/basket" element={<Basket />} />
          </Routes>
        </div>
      </Router>
    </BasketProvider>
  );
}

export default App;
