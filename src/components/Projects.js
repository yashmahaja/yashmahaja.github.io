import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
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
      description: 'Architected a modular AI-driven trading platform leveraging LangChain and MCP to extract insights from SEC filings, earnings calls, and real-time market feeds, boosted stock prediction accuracy by 23% over the baseline. Designed Spring Boot microservices that orchestrate LLM analysis with financial datasets. Implemented Dijkstra\'s algorithm to predict swing high/low movements by optimizing risk-adjusted paths across 50+ equities.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['React.js', 'Spring Boot', 'LangChain', 'OpenAI MCP', 'Dijkstra', 'Docker', 'CI/CD'],
      icons: [<FaReact />, <FaJava />, <FaPython />],
      github: 'https://github.com/yashmahaja/AutoTradeIQ',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Attire Avenue - E-commerce Platform',
      description: 'Developed a full-stack e-commerce platform using React.js (frontend) and Spring Boot with MySQL (backend), following MVC architecture to manage and display 1,000+ products. Integrated GraphQL to streamline data querying and reduce payload size by 40%, improving frontend load times and responsiveness. Implemented user authentication, role-based access control, and secured API endpoints using JWT.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['React.js', 'Spring Boot', 'GraphQL', 'MySQL', 'Docker', 'CI/CD', 'Jenkins'],
      icons: [<FaReact />, <FaJava />, <SiPostgresql />],
      github: 'https://github.com/yashmahaja/AttireAvenue_Frontend',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Flickbase - Picture Sharing Platform',
      description: 'Flickbase is a picture-sharing web application built using the MERN stack (MongoDB, Express, React, Node.js). Features user authentication with JWT tokens, admin and client roles, photo upload functionality, infinite scroll for smooth loading, and image color analysis using react-palette. Implemented with Material-UI for modern UI components and Docker for containerization.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Material-UI', 'Docker', 'Redux Toolkit'],
      icons: [<FaReact />, <SiMongodb />, <SiDocker />],
      github: 'https://github.com/yashmahaja/Flickbase',
      live: '#',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'devops', label: 'DevOps' }
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
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <div className="project-image-placeholder">
                  <FiCode />
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    Featured
                  </div>
                )}
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
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/yashmahaja" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FiGithub />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
