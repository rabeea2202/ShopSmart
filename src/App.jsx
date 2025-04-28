import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="bg-amber-100">
      <nav className="px-10 py-10 pt-6 pb-6 mb-10 flex items-center justify-between">
        <h1 className="text-yellow-600 font-bold text-5xl">ShopSmart &#128722;</h1>
        <div className="flex items-center space-x-8">
          <Link to="/products" className="text-xl font-bold">Products</Link>
          <Link to="/cart" className="text-xl font-bold">Cart ({cartItems.length})</Link>
        </div>
      </nav>
      </div>
      <div className="p-10">


        <Routes>
          <Route
            path="/"
            element={<ProductList cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/products"
            element={<ProductList cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
