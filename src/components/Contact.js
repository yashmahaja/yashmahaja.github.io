import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'yashmahajan0521@gmail.com',
      link: 'mailto:yashmahajan0521@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+1 (585) 305-2911',
      link: 'tel:+15853052911'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Rochester, NY',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      name: 'GitHub',
      url: 'https://github.com/yashmahaja',
      color: '#333'
    },
    {
      icon: <FiLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yashmahaja',
      color: '#0077b5'
    }
  ];

  return (
    <div></div>
  );
};

export default Contact;
