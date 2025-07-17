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

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 className="pixel-title" style={{ textAlign: 'center' }}>Experience and Awards</h1>

      {sectionHeader('Teaching')}
      <p>
        Worked on React-based admin dashboard used by 10K+ users. Built and integrated reusable components, improved API handling, and optimized performance.
      </p>

      {sectionHeader('Research')}
      <p>
        Assisted 100+ students with HTML, CSS, and JavaScript projects. Conducted weekly office hours and supported grading and debugging.
      </p>

      {sectionHeader('Academic Awards')}
      <p>
        Developed custom portfolio websites and small e-commerce platforms for clients using the MERN stack. Emphasized clean UI and responsive design.
      </p>

      {sectionHeader('Positions of Responsibility')}
      <p>
        Contributed to a project on computer vision for agriculture. Preprocessed image data and built models using TensorFlow to classify crop health.
      </p>
    </div>
  );
}

export default Experience;