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
        'Developed a React-Redux dashboard to display battery optimization metrics for energy clients, enabling faster access to key data and reducing load times by 80% through lazy loading and code splitting',
        'Engineered RESTful API endpoints using Spring Boot and SQL queries to retrieve pricing and reserve product data based on delivery dates, improving the accuracy and timeliness of financial reports used by stakeholders',
        'Created 10+ SQL AWS Athena views for schedules and pricing data, integrated views into FastAPI endpoints to enable efficient querying and retrieval, improving reporting speed by 65%',
        'Automated daily IESO financial reporting with AWS Step Functions and AWS Lambda querying IESO portal APIs, calculating revenue metrics, and writing results to AWS DynamoDB, reducing report generation time by 99%',
        'Streamlined financial report generation by automating build processes with Docker and deploying infrastructure with Terraform through GitHub Actions, eliminating errors and reducing manual deployment effort by 99%'
      ],
      technologies: ['React.js', 'Redux', 'Spring Boot', 'FastAPI', 'AWS', 'Docker', 'Terraform', 'GitHub Actions']
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Nihilent Technologies Pvt Ltd.',
      location: 'Pune, India',
      period: 'Jun 2022 - Jun 2023',
      type: 'Full-time',
      description: 'Developed ETL pipelines and data processing solutions for financial fraud detection and reporting.',
      achievements: [
        'Implemented an OCR-based ETL pipeline using Python and Azure Form Recognizer to extract key data from PDF invoices, transforming outputs into structured JSON and storing in AWS S3 for downstream analytics',
        'Built an end-to-end fraud detection system in AWS SageMaker leveraging AWS Rekognition & rule-based logic to flag fraud bills',
        'Processed 500+ daily invoices with 92% data-extraction accuracy, reducing invoice processing time by 63%',
        'Automated ML workflows by orchestrating SageMaker jobs with AWS Step Functions triggered via AWS EventBridge, eliminating manual notebook runs and enabling fully automated, scalable model execution, reducing manual effort by 99%'
      ],
      technologies: ['Python', 'Azure Form Recognizer', 'AWS SageMaker', 'AWS Rekognition', 'AWS S3', 'ETL', 'Machine Learning']
    },
    {
      id: 3,
      title: 'Software Engineer Intern',
      company: 'Precise IT Solutions Pvt. Ltd',
      location: 'Pune, India',
      period: 'Jan 2022 - Jun 2022',
      type: 'Internship',
      description: 'Developed full-stack e-commerce solutions with focus on responsive design and RESTful APIs.',
      achievements: [
        'Engineered responsive web interfaces using React.js, enhancing real-time interactivity & UX consistency across platforms',
        'Designed Spring Boot CRUD APIs for product catalog, cart, and order endpoints, using Spring Data JPA for integration with the database ensuring structured data handling',
        'Wrote SQL queries for data retrieval and reporting, joining product, cart, and order tables to validate API results, which improved data accuracy by 30%'
      ],
      technologies: ['React.js', 'Spring Boot', 'Spring Data JPA', 'SQL', 'REST APIs']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: '2025',
      credential: 'AWS-SAA',
      badgeUrl: 'https://www.credly.com/badges/a9332515-b984-48f4-ac49-a934eef74708/public_url'
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
            My professional journey and achievements - 2+ years of experience
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
                <motion.a
                  key={index}
                  href={cert.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
