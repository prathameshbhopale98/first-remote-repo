import { useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import { useSelector } from "react-redux";

function Header() {
  const [loginBtn, setLoginBtn] = useState("Login");
  const networkStatus = useNetworkStatus();
  const cartItems = useSelector((state) => state.cart.data.length);

  function handleClick() {
    if (loginBtn === "Login") {
      setLoginBtn("Logout");
    } else {
      setLoginBtn("Login");
    }
  }

  return (
    <header className="bg-white flex justify-between items-center shadow-md sticky top-0 z-10">
      <div className="header-start">
        <img
          className="w-20 ml-12"
          src="https://marketplace.canva.com/EAFXN4TGIh8/1/0/1600w/canva-yellow-minimalist-round-shaped-cafe-logo-sA35Sf4qZOY.jpg"
        />
      </div>

      <div className="header-end">
        <ul className="flex">
          <li className="px-6">
            Network Status: {networkStatus ? "✅" : "⭕"}{" "}
          </li>
          <li className="px-6">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6">
            <Link to="/about">About</Link>
          </li>
          <li className="px-6">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-6">
            <Link to="/cart">Cart ({cartItems})</Link>
          </li>
          <li className="px-6 mr-10">
            <button className="login-btn" onClick={handleClick}>
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
