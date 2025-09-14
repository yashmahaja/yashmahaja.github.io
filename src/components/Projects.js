import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiCode, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiPostgresql, SiDocker, SiMongodb } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AutoTradeIQ - AI Stock Navigator',
      description: 'AI-driven trading platform using LangChain and MCP for SEC filing analysis. Boosted stock prediction accuracy by 23% with Spring Boot microservices and Dijkstra algorithm for risk optimization.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React.js', 'Spring Boot', 'LangChain', 'OpenAI MCP', 'Dijkstra', 'Docker', 'CI/CD'],
      icons: [<FaReact />, <FaJava />, <FaPython />],
      github: 'https://github.com/yashmahaja/AutoTradeIQ',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Attire Avenue - E-commerce Platform',
      description: 'Full-stack e-commerce platform with React.js and Spring Boot. Integrated GraphQL to reduce payload size by 40% and implemented JWT authentication with role-based access control.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React.js', 'Spring Boot', 'GraphQL', 'MySQL', 'Docker', 'CI/CD', 'Jenkins'],
      icons: [<FaReact />, <FaJava />, <SiPostgresql />],
      github: 'https://github.com/yashmahaja/AttireAvenue_Frontend',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Flickbase - Picture Sharing Platform',
      description: 'Picture-sharing web app built with MERN stack. Features JWT authentication, photo uploads, infinite scroll, and image color analysis with Material-UI and Docker containerization.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Material-UI', 'Docker', 'Redux Toolkit'],
      icons: [<FaReact />, <SiMongodb />, <SiDocker />],
      github: 'https://github.com/yashmahaja/Flickbase',
      live: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Convex Hull Visualization Tool',
      description: 'Interactive visualization tool for convex hull algorithms (Brute Force, Jarvis March, Graham Scan, etc.). Features step-by-step execution and time complexity analysis for educational purposes.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React', 'JavaScript', 'Canvas API', 'Algorithms', 'Data Structures', 'Visualization'],
      icons: [<FaReact />, <FaPython />, <FaJava />],
      github: 'https://github.com/yashmahaja/ConvexHull',
      live: 'https://convex-hull-ui.vercel.app/',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'android', label: 'Android' },
    { id: 'web', label: 'Web' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <div className="project-image-placeholder">
                  <FiCode />
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  <div className="tech-icons">
                    {project.icons.map((icon, iconIndex) => (
                      <span key={iconIndex} className="tech-icon">
                        {icon}
                      </span>
                    ))}
                  </div>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <FiGithub />
                    Code
                  </a>
                  {project.live && project.live !== '#' && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <FiExternalLink />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
