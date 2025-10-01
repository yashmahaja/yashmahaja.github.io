import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <motion.p 
              className="hero-greeting"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
                             🚀 Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.3 }}
            >
              <span className="text-gradient" style={{ whiteSpace: 'nowrap' }}>Yash Mahajan</span>
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.4 }}
            >
              Software Engineer & CS Master's Student
            </motion.h2>
            

            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.5 }}
            >
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <a href="/YashMahajan_Resume.pdf" className="btn btn-secondary" download>
                <FiDownload />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.6 }}
            >
              <a href="https://github.com/yashmahaja" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <FiGithub />
              </a>
              <a href="https://leetcode.com/u/_yashmahajan/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <SiLeetcode />
              </a>
              <a href="https://www.linkedin.com/in/yashpmahajan" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <FiLinkedin />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <div className="hero-card">
              <div className="hero-card-content">
                <div className="code-block">
                  <div className="code-header">
                    <div className="code-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="code-title">portfolio.js</span>
                  </div>
                  <div className="code-body">
                    <pre>
                      <code>
{`const yash = {
    name: "Yash Mahajan",
    role: "Software Engineer",
    education: "MS CS @ RIT",
    skills: [
      "React.js", "Python", "Java",
      "Spring Boot", "Kotlin", "AWS"
    ],
    passion: "Building innovative solutions",
    location: "San Jose, CA"
  };
  
  console.log("Hello World! 👋");`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
