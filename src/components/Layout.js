import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiMoon, FiSun } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check for saved dark mode preference or default to light mode
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to body and save preference
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleNavClick = useCallback(() => {
    // Close mobile menu and scroll to top
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Memoize navigation items
  const navItems = useMemo(() => [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'blogs', label: 'Blogs', path: '/blogs' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'experience', label: 'Experience', path: '/experience' }
  ], []);

  // Memoize social links
  const socialLinks = useMemo(() => [
    { href: 'https://github.com/yashmahaja', icon: <FiGithub />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/yashpmahajan', icon: <FiLinkedin />, label: 'LinkedIn' },
    { href: 'mailto:yashmahajan0521@gmail.com', icon: <FiMail />, label: 'Email' }
  ], []);

  // Optimized animation variants
  const logoVariants = useMemo(() => ({
    initial: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.3 }
  }), [shouldReduceMotion]);

  const mobileMenuVariants = useMemo(() => ({
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.2 }
  }), [shouldReduceMotion]);

  return (
    <div className="layout">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <motion.div 
            className="nav-logo"
            {...logoVariants}
          >
            <Link to="/" className="logo-link" onClick={handleNavClick}>
              <span className="text-gradient">&lt;/&gt; Yash Mahajan</span>
            </Link>
          </motion.div>

          <div className="nav-menu">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-controls">
            <button 
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-menu"
              {...mobileMenuVariants}
            >
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mobile-social">
                {socialLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Made with ❤️ Yash Mahajan</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
