import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import About from "./About";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");


  const onlineStatus = useOnlineStatus();


  return (
    <div className="flex bg-white justify-between shadow-md shadow-white hover:shadow-xl hover:shadow-red-700 hover:transition-all ease-in delay-150">
      <img className="w-24" src={LOGO_URL} />

      <div className="flex ">
        <ul className="flex items-center font-medium">
          <li className="px-4">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link></li>
          <li>
            <Link to="/contact">Contact Us</Link></li>
          <li className="px-4">
            <Link to="/about">About Us</Link></li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
          <li className="px-4">Cart</li>
          <button
            className="px-2 py-2 bg-amber-500 rounded-md"
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
