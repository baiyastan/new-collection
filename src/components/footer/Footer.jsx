import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsActive(false)
    });
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <div className="logo">
            <Link to="/" style={{color: '#37517e', marginBottom: '5px'}}>IMPERIAL STYLE</Link>
          </div>
          <div className="footer-address">г.Бишкек Керемет 2-ая Ном-91</div>
          <p>
            <strong>Phone:</strong>+996504-304-333
          </p>
          <p>
            <strong>Email:</strong>k.kabylbekov@list.ru
          </p>
        </div>
        <div className="footer-menu">
          <div className="footer-link">Полезный ссылки</div>
          <div className="menu-link">
            <Link onClick={handleClick} to="/">Что шьём</Link>
            <Link onClick={handleClick} to="/about">О компании</Link>
            <Link onClick={handleClick} to="/service">Услуги</Link>
            <Link onClick={handleClick} to="/why">Почему мы</Link>
            <Link onClick={handleClick} to="/contact">Контакты</Link>
          </div>
        </div>
        <div className="footer-network">
          <div className="our-network">Наши социальные сети</div>
          <div className="footer-icons">
            <a href="https://www.youtube.com" target="blank" className="icon">
              <FaYoutube className="icon-back" />
            </a>
            <a href="https://www.instagram.com" target="blank" className="icon">
              <FaInstagram className="icon-back" />
            </a>
            <a href="https://telegram.org" target="blank" className="icon">
              <FaTelegramPlane className="icon-back" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
