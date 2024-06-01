import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import About from "./About";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex bg-white fixed w-full top-0 h-16 z-50 justify-between border-b-2  shadow-md shadow-white hover:shadow-md hover:shadow-red-700 hover:transition-all ease-in delay-150 ">
      <img className="w-24" src={LOGO_URL} />

      <div className="flex ">
        <ul className="flex items-center font-medium">
          <li className="px-4 font-bold">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 font-bold hover:text-red-600">
            <Link to="/">Home🏠</Link>
          </li>
          <li className="font-bold hover:text-red-600">
            <Link to="/contact">Contact Us☎️</Link>
          </li>
          <li className="px-4 font-bold hover:text-red-600">
            <Link to="/about">About Us🤔</Link>
          </li>
         

          <li className="px-2 font-bold hover:text-red-600 ">
            <Link to="/cart">Cart {cartItems.length === 0 ? "" : cartItems.length}  🛒</Link>
          </li>
          <button
            className=" m-2 px-2 py-2 bg-amber-500 rounded-md"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
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
