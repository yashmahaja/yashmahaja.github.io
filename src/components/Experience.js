import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiBriefcase, FiAward } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      id: 1,
      title: 'Software Engineer Co-op',
      company: 'Syso Technologies',
      location: 'Boston, MA',
      period: 'May 2025 - Present',
      type: 'Co-op',
      description: 'Developing innovative solutions for energy clients, focusing on battery optimization metrics and financial reporting systems.',
      achievements: [
        'Developed React-Redux dashboard for battery optimization metrics, reducing load times by 80% through lazy loading and code splitting',
        'Engineered RESTful API endpoints using Python FastAPI and SQL queries for pricing and reserve product data',
        'Added caching for pricing Athena queries, cutting repeated queries by 60% during peak usage',
        'Built daily IESO financial reporting with AWS Step Functions and Lambda, reducing report generation time by 99%',
        'Automated CI/CD workflows using Docker & Terraform to provision AWS Athena views'
      ],
      technologies: ['React.js', 'Redux', 'Python', 'FastAPI', 'AWS', 'Docker', 'Terraform']
    },
    {
      id: 2,
      title: 'Grading Assistant',
      company: 'Rochester Institute of Technology',
      location: 'Rochester, NY',
      period: 'Jun 2024 - May 2025',
      type: 'Part-time',
      description: 'Provided academic support and evaluation for computer science courses, focusing on computer networks and programming fundamentals.',
      achievements: [
        'Evaluated assignments and provided feedback on computer networks and formal languages for 70+ students',
        'Devised C++ test cases to assess Mechanics of Programming submissions for correctness and edge-case handling',
        'Maintained high standards for code quality and academic integrity'
      ],
      technologies: ['C++', 'Computer Networks', 'Formal Languages', 'Testing']
    },
    {
      id: 3,
      title: 'Software Engineer Trainee',
      company: 'Nihilent Ltd.',
      location: 'Pune, India',
      period: 'Jun 2022 - Jun 2023',
      type: 'Full-time',
      description: 'Developed ETL pipelines and data processing solutions for financial fraud detection and reporting.',
      achievements: [
        'Designed OCR-based ETL pipeline using Python and Azure Form Recognizer to extract data from PDF invoices',
        'Optimized SQL queries in Snowflake to extract, transform, and load over 1TB of data daily into AWS S3',
        'Achieved over 95% accuracy in financial fraud detection and reporting'
      ],
      technologies: ['Python', 'Azure Form Recognizer', 'Snowflake', 'AWS S3', 'ETL']
    },
    {
      id: 4,
      title: 'Software Engineer Intern',
      company: 'Precise IT Solutions Pvt. Ltd',
      location: 'Pune, India',
      period: 'Jan 2022 - Jun 2022',
      type: 'Internship',
      description: 'Developed full-stack e-commerce solutions with focus on responsive design and RESTful APIs.',
      achievements: [
        'Engineered responsive web interfaces using React.js, enhancing real-time interactivity & UX consistency',
        'Built RESTful APIs with Django for e-commerce platform, supporting 1,200+ SKUs with median response time under 200ms',
        'Increased order throughput by 18% through optimized backend performance',
        'Collaborated in agile sprints using AWS CloudWatch and CI/CD pipelines'
      ],
      technologies: ['React.js', 'Django', 'REST APIs', 'AWS CloudWatch', 'CI/CD']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: '2024',
      credential: 'AWS-SAA'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="experience-content">
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="experience-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">
                      <FiBriefcase />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <div className="experience-period">
                      <FiCalendar />
                      <span>{exp.period}</span>
                    </div>
                    <div className="experience-location">
                      <FiMapPin />
                      <span>{exp.location}</span>
                    </div>
                    <div className="experience-type">
                      <span className="type-badge">{exp.type}</span>
                    </div>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-achievements">
                  <h4>Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="certifications-section"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="certifications-title">
              <FiAward />
              Certifications & Achievements
            </h3>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="certification-header">
                    <h4 className="certification-name">{cert.name}</h4>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-credential">Credential: {cert.credential}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
