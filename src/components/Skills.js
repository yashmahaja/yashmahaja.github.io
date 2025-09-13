import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaPython, FaJava, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaAngular } from 'react-icons/fa';
import { SiJavascript, SiNodedotjs, SiMongodb, SiPostgresql, SiGit, SiJenkins, SiJira, SiDjango, SiFlask, SiTerraform } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skills = [
    // Languages
    { name: 'Python', icon: <FaPython />, category: 'Languages', level: 90 },
    { name: 'Java', icon: <FaJava />, category: 'Languages', level: 85 },
    { name: 'JavaScript', icon: <SiJavascript />, category: 'Languages', level: 85 },
    { name: 'HTML5', icon: <FaHtml5 />, category: 'Languages', level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt />, category: 'Languages', level: 90 },
    { name: 'C++', icon: <FaJava />, category: 'Languages', level: 80 },
    
    // Frontend & Frameworks
    { name: 'React.js', icon: <FaReact />, category: 'Frontend', level: 90 },
    { name: 'Angular', icon: <FaAngular />, category: 'Frontend', level: 75 },
    { name: 'Node.js', icon: <SiNodedotjs />, category: 'Backend', level: 80 },
    { name: 'Django', icon: <SiDjango />, category: 'Backend', level: 85 },
    { name: 'Flask', icon: <SiFlask />, category: 'Backend', level: 80 },
    
    // Cloud & Databases
    { name: 'AWS', icon: <FaAws />, category: 'Cloud', level: 85 },
    { name: 'MySQL', icon: <SiPostgresql />, category: 'Database', level: 80 },
    { name: 'MongoDB', icon: <SiMongodb />, category: 'Database', level: 75 },
    { name: 'Azure', icon: <FaAws />, category: 'Cloud', level: 75 },
    { name: 'DynamoDB', icon: <SiMongodb />, category: 'Database', level: 80 },
    
    // DevOps & Tools
    { name: 'Docker', icon: <FaDocker />, category: 'DevOps', level: 80 },
    { name: 'Terraform', icon: <SiTerraform />, category: 'DevOps', level: 75 },
    { name: 'Git', icon: <SiGit />, category: 'Tools', level: 90 },
    { name: 'Jenkins', icon: <SiJenkins />, category: 'DevOps', level: 75 },
    { name: 'Jira', icon: <SiJira />, category: 'Tools', level: 80 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="skills-content">
          <motion.div
            className="skills-grid"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-icon-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                title={skill.name}
              >
                {skill.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3>Additional Skills & Tools</h3>
          <div className="skills-tags">
            {[
              'FastAPI', 'Spring Boot', 'GraphQL', 'REST APIs',
              'CI/CD Pipeline', 'Agile Methodology', 'Pytest', 'JUnit',
              'Linux', 'GitHub Actions', 'Data Structures',
              'Algorithms', 'Machine Learning', 'Big Data',
              'ETL Pipeline', 'LangChain', 'OpenAI MCP', 'AWS SageMaker',
              'AWS Rekognition', 'AWS Step Functions', 'AWS Lambda',
              'Spring Data JPA', 'JWT', 'MVC Architecture'
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + (index * 0.02) }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
