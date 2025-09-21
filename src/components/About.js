import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiAward } from 'react-icons/fi';
import './About.css';

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
    rootMargin: '100px'
  });

  // Memoize stats to prevent unnecessary re-renders
  const stats = useMemo(() => [
    { icon: <FiAward />, label: 'Years Experience', value: '2+' },
    { icon: <FiMapPin />, label: 'Location', value: 'San Jose, CA' }
  ], []);

  // Optimized animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        staggerChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  }), [shouldReduceMotion]);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.3 }
    }
  }), [shouldReduceMotion]);

  const headerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.3 }
    }
  }), [shouldReduceMotion]);

  // Memoized content to prevent re-renders
  const aboutContent = useMemo(() => (
    <>
      <h3>Who I Am</h3>
      <p>
        I'm Yash Mahajan a Software Engineer and Master's student in Computer Science at 
        Rochester Institute of Technology (RIT). With a strong foundation in both theoretical 
        and practical aspects of computer science, I enjoy creating innovative, 
        scalable, and user-friendly applications that make a real impact.
      </p>
  
      <p>
        My journey in technology began with curiosity and has grown into a drive to 
        build meaningful solutions. I specialize in React.js, Kotlin, Spring Boot, 
        Python, AWS cloud services, and full-stack development. 
        I focus on writing clean, maintainable code and staying up-to-date with the 
        latest tools and best practices.
      </p>
  
      <h3>My Background</h3>
      <p>
        Alongside my Computer Science studies at RIT, I also hold an Integrated Master's 
        in Bioengineering. This combination gives me a unique perspective at the intersection 
        of technology and applied science. My academic training, paired with hands-on 
        project experience, has equipped me with a comprehensive understanding of 
        modern software engineering, cloud computing, and machine learning.
      </p>
    </>
  ), []);
  

  const highlightsContent = useMemo(() => [
    { icon: '🎯', title: 'Goal-Oriented', desc: 'Focused on delivering high-quality solutions that meet business objectives' },
    { icon: '🚀', title: 'Fast Learner', desc: 'Quick to adapt to new technologies and frameworks' },
    { icon: '🤝', title: 'Team Player', desc: 'Excellent communication and collaboration skills' }
  ], []);

  const educationContent = useMemo(() => (
    <>
      <h3>Education</h3>
      <div className="education-item">
        <div className="education-header">
          <h4>Master of Science in Computer Science</h4>
          <span className="education-year">Aug 2023 - Dec 2025</span>
        </div>
        <p className="education-school">Rochester Institute of Technology (RIT)</p>
        <p className="education-details">
          Relevant Coursework: Data Structures & Algorithms, Big Data, Machine Learning, 
          Artificial Intelligence, Software Engineering, Cloud Computing
        </p>
      </div>
    </>
  ), []);

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know me better
          </p>
        </motion.div>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="about-text"
            variants={itemVariants}
          >
            {aboutContent}

            <div className="about-highlights">
              {highlightsContent.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-icon">{highlight.icon}</span>
                  <div>
                    <h4>{highlight.title}</h4>
                    <p>{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            variants={itemVariants}
          >
            <div className="profile-image-container">
              <img 
                src="/me.jpeg" 
                alt="Yash Mahajan" 
                className="profile-image"
              />
            </div>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  variants={itemVariants}
                >
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="education-card">
              {educationContent}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
