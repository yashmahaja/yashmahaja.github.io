import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <FiGithub />,
      url: 'https://github.com/yashmahaja',
      label: 'GitHub'
    },
    {
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/yashmahaja',
      label: 'LinkedIn'
    },
    {
      icon: <FiMail />,
      url: 'mailto:yashmahajan0521@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="home" className="home">
      <div className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="text-gradient">Yash Mahajan</span>
            </motion.h1>
            
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full Stack Developer
            </motion.h2>
            

            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </motion.div>
            
            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiArrowDown />
          </motion.div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
      
      <div id="about" className="about-preview">
        <div className="container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>About Me</h2>
            <Link to="/about" className="btn btn-outline">
              Learn More About Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
