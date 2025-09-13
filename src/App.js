import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Components for SPA sections
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Pages for routing
import BlogsPage from './pages/Blogs';

// Main SPA component
const MainSPA = () => {
  return (
    <div className="spa-container">
      {/* Hero Section */}
      <section id="home" className="spa-section">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="spa-section">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="spa-section">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience" className="spa-section">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="spa-section">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="spa-section">
        <Contact />
      </section>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainSPA />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
