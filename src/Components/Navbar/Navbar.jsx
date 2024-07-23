import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext/ShopContext";

const Navbar = () => {
  const { getTotalCartItem } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "150%";
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <div className="navbar-section">
        <i className="ri-menu-line mob-nav-open" onClick={openMenu}></i>
        <ul ref={menuRef} className="nav-menu">
          <i
            className="ri-close-large-line mob-nav-close"
            onClick={closeMenu}
          ></i>
          <li onClick={() => setMenu("shop")}>
            <Link style={{ textDecoration: "none" }} to="/">
              Shop
            </Link>
            {menu == "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("mens")}>
            {" "}
            <Link style={{ textDecoration: "none" }} to="/mens">
              Men
            </Link>{" "}
            {menu == "mens" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("womens")}>
            {" "}
            <Link style={{ textDecoration: "none" }} to="/womens">
              Women
            </Link>{" "}
            {menu == "womens" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link style={{ textDecoration: "none" }} to="/kids">
              Kids
            </Link>{" "}
            {menu == "kids" ? <hr /> : <></>}
          </li>

          <li>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </li>
        </ul>
        <div className="login-cart">
          <Link to="/cart">
            <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItem()}</div>
        </div>
      </div>
    </div>
  );
};
import "./Navbar.css";
import { Link } from "react-router-dom";
export default Navbar;
