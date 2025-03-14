import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import "./App.css";

import Signup from "./pages/Signup";
import { CartProvider } from "./context/CartContext"; // Import Cart Context
import Payment from "./pages/Payment.jsx";

function App() {
  return (
    <CartProvider> {/* Wrap App inside CartProvider */}
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
       
      </div>
    </CartProvider>
  );
}

export default App;
