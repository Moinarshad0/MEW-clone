import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";
import images from "../images/icon32.png";
  
function Header() {
  const [dropdown, setDropdown] = useState(false);
  
  return (
    <nav className="navbar">   
      <Link to="/">
        {" "}
        <img src={images} alt="Logo" />{" "}
      </Link>
      <h2 style={{ color: "white" }}>MEW</h2>

      <ul className="nav-items">
        {navItems.map((item) => {
          if (item.title === "Walletactions") {
            return (
              <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link to={item.path}>{item.title}</Link>
                {dropdown && <Dropdown />}
              </li>
            );
          }
          return (
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <Button />
    </nav>
  );
}

export default Header;
