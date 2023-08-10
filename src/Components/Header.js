import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import About from "./About";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <img className="com-logo" src={LOGO_URL} />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/contact">Contact Us</Link></li>
          <li>About Us</li>
          <li>Cart</li>
          <button
            className="Login-btn"
            onClick={() => {
             btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
