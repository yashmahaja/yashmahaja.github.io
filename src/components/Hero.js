import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="hero-greeting"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
                             🚀 Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-gradient" style={{ whiteSpace: 'nowrap' }}>Yash Mahajan</span>
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Software Engineer & CS Master's Student
            </motion.h2>
            

            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <button className="btn btn-primary" onClick={scrollToContact}>
                <FiMail />
                Get In Touch
              </button>
              <a href="/resume.pdf" className="btn btn-secondary" download>
                <FiDownload />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <a href="https://github.com/yashmahaja" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/yashpmahajan" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <FiLinkedin />
              </a>
              <a href="mailto:yashmahajan0521@gmail.com" className="hero-social-link">
                <FiMail />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
    "AWS", "Node.js", "FastAPI"
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

export default Hero;
