import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiTag, FiArrowRight } from 'react-icons/fi';
import './Blogs.css';

const Blogs = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px'
  });

  // Sample blog posts - you can replace these with your actual blog data
  const blogPosts = useMemo(() => [
    {
      id: 1,
      title: "Be careful with System.system_time in Elixir!",
      excerpt: "I encountered a sneaky bug in my Elixir app where `System.system_time` led to expired tokens. This led to a deep dive into how Elixir handles time, and a small PR to the `Goth` library.",
      date: "March 17th, 2024",
      tags: ["Elixir"],
      image: "/blog-elixir.jpg", // You can add actual blog post images
      url: "#" // Replace with actual blog post URL
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for building large-scale React applications, including state management, performance optimization, and code organization strategies.",
      date: "February 28th, 2024",
      tags: ["React", "JavaScript"],
      image: "/blog-react.jpg",
      url: "#"
    },
    {
      id: 3,
      title: "AWS Lambda Best Practices",
      excerpt: "A comprehensive guide to AWS Lambda best practices, covering cold starts, memory optimization, error handling, and monitoring strategies.",
      date: "January 15th, 2024",
      tags: ["AWS", "Serverless"],
      image: "/blog-aws.jpg",
      url: "#"
    }
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  }), [shouldReduceMotion]);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4 }
    }
  }), [shouldReduceMotion]);

  return (
    <section id="blogs" className="blogs">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className="header-content">
            <div className="breadcrumb">
              <span className="breadcrumb-path">~ / All Posts</span>
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
          className="blogs-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="blogs-grid">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-card"
                variants={itemVariants}
              >
                <div className="blog-card-content">
                  <div className="blog-image">
                    <div className="blog-image-placeholder">
                      <div className="placeholder-icon">📝</div>
                    </div>
                  </div>
                  
                  <div className="blog-details">
                    <h2 className="blog-title">
                      <a href={post.url} className="blog-title-link">
                        {post.title}
                      </a>
                    </h2>
                    
                    <div className="blog-meta">
                      <span className="blog-date">
                        <FiCalendar />
                        {post.date}
                      </span>
                      <span className="blog-tags">
                        <FiTag />
                        {post.tags.join(', ')}
                      </span>
                    </div>
                    
                    <p className="blog-excerpt">
                      {post.excerpt}
                    </p>
                    
                    <a href={post.url} className="blog-read-more">
                      Read more <FiArrowRight />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="blogs-pagination">
            <span className="pagination-info">Page 1</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
