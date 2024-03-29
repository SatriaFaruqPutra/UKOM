import React from "react";
import logo from "../../assets/images/logo.png"
import { links } from "../../Data";
import { IoIosMenu } from "react-icons/io";
import "./Header.css";

const Header = () => {
    return (
        <header className='header'>
        <nav className='nav container'>
          <a href='/' className='nav__logo'>
            <img src={logo} alt='' className='nav__logo-img'></img>
          </a>

          <div className="nav__menu">
            <ul className="nav__list">
                {links.map(({name, path}, index) => {
                    return (
                        <li className="nav__item" key={index}>
                            <a href={path} className="nav__links">
                                {name}
                            </a>
                        </li>
                    )
                })}
            </ul>
          </div>

          <div className="nav__toggle">
            <IoIosMenu/>
          </div>
        </nav>
      </header>
    )
}

export default Header;