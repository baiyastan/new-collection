import React from 'react'

import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-logo'>
          <div className='logo'>
            <Link to='/'>LOGO</Link>
          </div>
          <div className='footer-address'>г.Бишкек Керемет 2-ая Ном-91</div>
          <p><strong>Phone:</strong>+996504-304-333</p>
          <p><strong>Email:</strong>k.kabylbekov@list.ru</p>
        </div>
        <div className='footer-menu'>
          <div className='footer-link'>Полезный ссылки</div>
          <div className='menu-link'>
            <Link to='/'>Что шьём</Link>
            <Link to='/about'>О компании</Link>
            <Link to='/service'>Услуги</Link>
            <Link to='/why'>Почему мы</Link>
            <Link to='/contact'>Контакты</Link>
          </div>
        </div>
        <div className='footer-network'>
          <div className='our-network'>Наши социальные сети</div>
          <div className='footer-icons'>
            <a href='https://www.youtube.com' target='blank' className='icon'>
              <FaYoutube className='icon-back'/>
            </a>
            <a href='https://www.instagram.com' target='blank' className='icon'>
              <FaInstagram className='icon-back'/>
            </a>
            <a href='https://telegram.org' target='blank' className='icon'>
              <FaTelegramPlane className='icon-back'/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer