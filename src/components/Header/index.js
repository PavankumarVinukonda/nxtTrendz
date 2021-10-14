// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div>
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="websiteLogo"
      />
      <div className="Thumbnail-container">
        <Link to="/" className="nav-link">
          <li className="thumbnail">Home</li>
        </Link>
        <Link to="/Products" className="nav-link">
          <li className="thumbnail">Products</li>
        </Link>
        <Link to="/Cart" className="nav-link">
          <li className="thumbnail">Cart</li>
        </Link>
        <button type="button" className="logoutButton">
          Logout
        </button>
      </div>
    </nav>
    <nav className="navforsm">
      <div className="logos">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-logout"
        />
      </div>
      <div className="container-2">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-icons-sm"
          />
        </Link>
        <Link to="/Products">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-icons-sm"
          />
        </Link>
        <Link to="/Cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-icons-sm"
          />
        </Link>
      </div>
    </nav>
  </div>
)

export default Header
