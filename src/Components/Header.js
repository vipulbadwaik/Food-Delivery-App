import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import About from "./About";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");


  const onlineStatus = useOnlineStatus();


  return (
    <div className="header">
      <img className="com-logo" src={LOGO_URL} />

      <div className="nav-items">
        <ul>
          <li>
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>Home</li>
          <li>
            <Link to="/contact">Contact Us</Link></li>
          <li>
            <Link to="/about">About Us</Link></li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
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
