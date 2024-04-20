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
      setIsActive(false);
    });
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <div className="logo">
            <Link to="/" style={{ color: "#37517e", marginBottom: "5px" }}>
              IMPERIAL STYLE
            </Link>
          </div>
          <div className="footer-address">г.Бишкек Керемет 2-ая Ном-91</div>
          <a href="tel:+996500992220" className="link">
            <strong>Phone:</strong>+996 500 992 220
          </a>
          <a href="molito: imperial.style3@gmail.com" className="link">
            <strong>Email:</strong>imperial.style3@gmail.com
          </a>
        </div>
        <div className="footer-menu">
          <div className="footer-link">Полезный ссылки</div>
          <div className="menu-link">
            <Link onClick={handleClick} to="/">
              Что шьём
            </Link>
            <Link onClick={handleClick} to="/о компании">
              О компании
            </Link>
            <Link onClick={handleClick} to="/услуги">
              Услуги
            </Link>
            <Link onClick={handleClick} to="/почему мы">
              Почему мы
            </Link>
            <Link onClick={handleClick} to="/контакты">
              Контакты
            </Link>
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
