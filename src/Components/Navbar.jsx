import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaSignInAlt, FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">Reddy's FoodCourt</Link>
          <ul className="nav-links">
            <li><Link to="/"><FaHome className="icon" /> Home</Link></li>
            <li><Link to="/about-us"><FaInfoCircle className="icon" /> About Us</Link></li>
            <li><Link to="/login"><FaSignInAlt className="icon" /> Login</Link></li>
            <li><Link to="/cart"><FaShoppingCart className="icon" /> Cart</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
