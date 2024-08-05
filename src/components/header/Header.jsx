import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/logo2.png";

import "./Header.css";

function Header() {
  // const [open, setOpen] = useState(false)
  const [isChecked, setChecked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleNavLinkClick = () => {
    setChecked(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`top-header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img className="" src={logo} alt="" />
            </Link>
          </div>
          <nav className={`navs ${isChecked ? "nav-mobile" : ""}`}>
            <ul>
              <li>
                <NavLink
                  onClick={handleNavLinkClick}
                  activeclassname="active"
                  to="/"
                >
                  Что шьем
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinkClick}
                  activeclassname="active"
                  to="/catalog"
                >
                  Каталог
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinkClick}
                  activeclassname="active"
                  to="/about"
                >
                  О компании
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinkClick}
                  activeclassname="active"
                  to="/why"
                >
                  Почему мы
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinkClick}
                  activeclassname="active"
                  to="/contact"
                >
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>
          <label htmlFor="burger" className="burger">
            <input
              id="burger"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
