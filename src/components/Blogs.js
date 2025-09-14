import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiClock, FiBook } from 'react-icons/fi';
import './Blogs.css';

const Blogs = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px'
  });

  return (
    <section id="blogs" className="blogs">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
        >
          <div className="header-content">
            <div className="breadcrumb">
              <span className="breadcrumb-path">~ / Blog</span>
            </div>
            <h1 className="section-title">
              Blog <span className="text-gradient">Posts</span>
            </h1>
            <p className="section-subtitle">
              Thoughts, tutorials, and insights from my journey in software development
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="coming-soon-container"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
        >
          <div className="coming-soon-content">
            <motion.div 
              className="coming-soon-icon"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.4 }}
            >
              <FiBook />
            </motion.div>
            
            <motion.h2 
              className="coming-soon-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.6 }}
            >
              Coming Soon
            </motion.h2>
            
            <motion.p 
              className="coming-soon-description"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.8 }}
            >
              I'm working on some exciting blog posts about software development, 
              programming tips, and my journey in tech. Stay tuned for insightful 
              content coming your way!
            </motion.p>
            
            <motion.div 
              className="coming-soon-status"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 1.0 }}
            >
              <FiClock />
              <span>In Development</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
