import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
    // const [open, setOpen] = useState(false)
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

  return (
    <header className='header'>
        <div className='container'>
            <div className='logo'>
                <Link to='/'>LOGO</Link>
            </div>
            <nav className={`navs ${isChecked ? "nav-mobile" : ""}`}>
                <ul>
                    <li>
                        <Link to='/'>Что шьем</Link>
                    </li>
                    <li>
                        <Link to='/about'>О компании</Link>
                    </li>
                    <li>
                        <Link to='/service'>Услуги</Link>
                    </li>
                    <li>
                        <Link to='/why'>Почему мы</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Контакты</Link>
                    </li>
                </ul>
                <button className={`header-btn`}>Начать</button>
            </nav>
            <label htmlFor="burger" className="burger">
                <input id="burger" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    </header>
  )
}

export default Header