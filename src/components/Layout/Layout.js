import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FaHome, FaBriefcase, FaIdCardAlt, FaEnvelope } from 'react-icons/fa';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { GiSun, GiMoonBats } from 'react-icons/gi';

import './Layout.css';

import avatar from '../../static/avatar.png';
import { ThemeContext } from '../../App';

const Layout = ({ children }) => {
  const navbarRef = useRef(null);

  const { pathname } = useLocation();
  const theme = useContext(ThemeContext);

  const [currentThemeColor, setCurrentThemeColor] = useState(theme.light);

  const handleThemeColorChange = () => {
    setCurrentThemeColor(
      currentThemeColor === theme.light ? theme.dark : theme.light
    );

    document.body.style.backgroundColor =
      currentThemeColor === theme.light ? '#282c34' : '#ffffff';

    // This returns the opposite of chosen theme, so this code reverses it back
    window.localStorage.setItem(
      'preferredTheme',
      currentThemeColor === theme.light ? theme.dark : theme.light
    );
  };

  // Automatically change theme color depending on time of the day
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 8 && currentHour < 20) {
      setCurrentThemeColor(theme.light);
      document.body.style.backgroundColor = '#ffffff';
    } else if (currentHour >= 20 || currentHour < 8) {
      setCurrentThemeColor(theme.dark);
      document.body.style.backgroundColor = '#282c34';
    }
  }, [theme.light, theme.dark]);

  return (
    <div data-theme={currentThemeColor} className='page-container'>
      <header className='main-header'>
        <img src={avatar} alt='' className='avatar-img' />
        <h2>sashacozub{pathname}</h2>
      </header>
      <aside className='aside-navbar' ref={navbarRef}>
        <nav>
          <Link
            to='/home'
            className={pathname === '/home' ? 'active-page' : ''}
            id='home-button'
          >
            <FaHome className='nav-icon' />
          </Link>
          <Link
            to='/projects'
            className={pathname === '/projects' ? 'active-page' : ''}
            id='projects-button'
          >
            <FaBriefcase className='nav-icon' />
          </Link>
          <Link
            to='/about'
            className={pathname === '/about' ? 'active-page' : ''}
            id='about-button'
          >
            <FaIdCardAlt className='nav-icon' />
          </Link>
          <Link
            to='/contact'
            className={pathname === '/contact' ? 'active-page' : ''}
            id='contact-button'
          >
            <FaEnvelope className='nav-icon' />
          </Link>
        </nav>
      </aside>
      <section className='main-content'>{children}</section>
      <footer className='main-footer'>
        <div className='footer-socials'>
          <a
            href='https://www.linkedin.com/in/alexander-cozub/'
            target='_blank'
            rel='noreferrer'
          >
            <SiLinkedin className='footer-icon' />
          </a>
          <a
            href='https://github.com/sashacozub'
            target='_blank'
            rel='noreferrer'
          >
            <SiGithub className='footer-icon' />
          </a>
        </div>
        <div onClick={handleThemeColorChange} className='color-mode-btn'>
          {currentThemeColor === theme.light ? (
            <GiSun className='color-mode-icon' />
          ) : (
            <GiMoonBats className='color-mode-icon' />
          )}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
