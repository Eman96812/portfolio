import React from 'react';

function Projects() {
  const sectionHeader = (title) => (
    <div
      style={{
        backgroundColor: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        marginTop: '2rem',
        marginBottom: '1rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <h2 className="pixel-heading" style={{ margin: 0 }}>{title}</h2>
    </div>
  );

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 className="pixel-title" style={{ textAlign: 'center' }}>Projects</h1>

      {sectionHeader('Personal Portfolio')}
      <p>
        Designed and developed this responsive personal website using React and custom CSS. Features pixel-style headings, animated speech bubble, and integrated contact form with Formspree.
      </p>

      {sectionHeader('AI-Powered Chatbot')}
      <p>
        Built a chatbot using Python and OpenAI API for a university helpdesk. Implemented natural language understanding and custom prompts to improve student query resolution.
      </p>

      {sectionHeader('Smart Parking App')}
      <p>
        Developed a full-stack app to track parking availability using sensors and real-time data. Used React Native for frontend and Firebase for backend integration.
      </p>

      {sectionHeader('E-Commerce Admin Dashboard')}
      <p>
        Created a React-based admin dashboard with chart visualizations, product management, and order analytics. Used Redux and Material UI for state and styling.
      </p>
    </div>
  );
}

export default Projects;