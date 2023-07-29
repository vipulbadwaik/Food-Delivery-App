import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
      <div className="header">
        
          <img className="com-logo" src={LOGO_URL} />
      
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;