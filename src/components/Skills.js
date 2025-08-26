import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaPython, FaJava, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNodedotjs, SiMongodb, SiPostgresql, SiRedis, SiKubernetes, SiGit, SiJenkins, SiJira } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'Java', icon: <FaJava />, level: 85 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
        { name: 'HTML/CSS', icon: <SiJavascript />, level: 90 },
        { name: 'C/C++', icon: <FaJava />, level: 80 }
      ]
    },
    {
      title: 'Frontend & Frameworks',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'Angular.js', icon: <FaReact />, level: 75 },
        { name: 'Node.js', icon: <SiNodedotjs />, level: 80 },
        { name: 'Django', icon: <FaPython />, level: 85 },
        { name: 'Flask', icon: <FaPython />, level: 80 }
      ]
    },
    {
      title: 'Cloud & Databases',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 85 },
        { name: 'MySQL', icon: <SiPostgresql />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
        { name: 'Azure', icon: <FaAws />, level: 75 },
        { name: 'DynamoDB', icon: <SiMongodb />, level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: <FaDocker />, level: 80 },
        { name: 'Terraform', icon: <FaDocker />, level: 75 },
        { name: 'Git', icon: <SiGit />, level: 90 },
        { name: 'Jenkins', icon: <SiJenkins />, level: 75 },
        { name: 'Jira', icon: <SiJira />, level: 80 }
      ]
    }
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
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4 className="skill-name">{skill.name}</h4>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
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
              'ETL Pipeline', 'Snowflake', 'LangChain', 'OpenAI MCP'
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
