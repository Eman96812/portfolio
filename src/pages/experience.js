import React from 'react';

function Experience() {
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

  const subHeader = (title) => (
    <h3
      style={{
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '0.8rem',
        color: '#c71585',
        margin: '1rem 0 0.25rem'
      }}
    >
      {title}
    </h3>
  );

  const paragraphStyle = {
    marginBottom: '1rem',
    lineHeight: '1.5',
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 className="pixel-title" style={{ textAlign: 'center' }}>Experience and Awards</h1>

      {sectionHeader('Teaching')}
      {subHeader('Teaching Assistant - CS3812: Introduction to Blockchain Technologies and Applications')}
      <p style={paragraphStyle}>
        Helped students grasp HTML, CSS, and JavaScript. Hosted weekly sessions and graded assignments.
      </p>

      {subHeader('Teaching Assistant - CS370: Operating Systems')}
      <p style={paragraphStyle}>
        Provided one-on-one help and tutorials for struggling students; created supplemental exercises.
      </p>

      {subHeader('Teaching Assistant - CS382: Network Centric Computing')}
      <p style={paragraphStyle}>
        Provided one-on-one help and tutorials for struggling students; created supplemental exercises.
      </p>

      {subHeader('Teaching Assistant - CS200: Introduction to Programming')}
      <p style={paragraphStyle}>
        Provided one-on-one help and tutorials for struggling students; created supplemental exercises.
      </p>

      {subHeader('Head Teaching Assistant and Course Designer - CS200: Introduction to Programming')}
      <p style={paragraphStyle}>
        Provided one-on-one help and tutorials for struggling students; created supplemental exercises.
      </p>

      {sectionHeader('Research')}
      {subHeader('Undergraduate Researcher - CV Project')}
      <p style={paragraphStyle}>
        Worked on a TensorFlow-based plant health detection tool. Handled preprocessing and model evaluation.
      </p>

      {sectionHeader('Academic Awards')}
      {subHeader('Dean’s Honor List')}
      <p style={paragraphStyle}>
        Recognized for academic excellence over multiple semesters.
      </p>

      {sectionHeader('Academic Coursework')}
      {subHeader('Web Development (CS203)')}
      <p style={paragraphStyle}>
        Built a MERN stack application and explored RESTful APIs and state management.
      </p>

      {subHeader('AI & ML Fundamentals')}
      <p style={paragraphStyle}>
        Studied supervised learning, classification, regression, and neural networks.
      </p>

      {sectionHeader('Skills')}
      {subHeader('Languages & Tools')}
      <p style={paragraphStyle}>
        JavaScript, Python, React, Node.js, MongoDB, Git, Firebase, TensorFlow
      </p>

      {sectionHeader('Positions of Responsibility')}
      {subHeader('Hackathon Lead - LUMS Coders')}
      <p style={paragraphStyle}>
        Coordinated with 100+ participants, managed logistics, and led post-event evaluation.
      </p>
    </div>
  );
}

export default Experience;