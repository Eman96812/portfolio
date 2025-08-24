import React from 'react';

function Projects({ darkMode }) {
  const sectionHeader = (title) => (
    <div
      style={{
        backgroundColor: darkMode ? '#f8ddecff' : '#ece5e9ff',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        marginTop: '2rem',
        marginBottom: '0.5rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <h2
        className="pixel-heading"
        style={{
          margin: 0,
          color: '#1a1a1a',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {title}
      </h2>
    </div>
  );

  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem 1rem',
      fontFamily: 'Arial, sans-serif',
      color: darkMode ? '#f5f5f5' : '#1a1a1a',
    },
    title: {
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: darkMode ? '#ffc0cb' : '#1a1a1a',
    },
    subheading: {
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
      fontSize: '1.05rem',
      marginBottom: '0.5rem',
      color: darkMode ? '#ffffff' : '#000000',
    },
    paragraph: {
      marginBottom: '1.25rem',
      lineHeight: '1.6',
      fontFamily: 'Arial, sans-serif',
      fontSize: '0.92rem'
    },
  };

  return (
    <div style={styles.container}>
      <h1 className="pixel-title" style={styles.title}>Projects and Publications</h1>

      {sectionHeader('LLM-powered System for Multi-modal Content Moderation')}
      <h3 style={styles.subheading}>
        <span style={{ color: darkMode ? '#c1186dff' : '#c1186dff', fontWeight: 'bold' }}>
          [In Submission]
        </span>{' '}
        Safeguarding Children at Scale: Cost-Effective Multimodal LLM Detection of Inappropriate YouTube Advertising
      </h3>
      <p style={{ fontSize: '0.85rem', marginTop: '-0.25rem', marginBottom: '0.75rem', color: darkMode ? '#f8ddecff' : '#444' }}>
        <strong>Eman Nabeel</strong>, Haleema Jamil, Shizza Asher, Zaeem Khan, Nida Tanveer, Ihsan Ayyub Qazi, Zafar Ayyub Qazi <br />
        {/* <span style={{ fontStyle: 'italic' }}>*co–first authors</span> */}
      </p>
      <p style={styles.paragraph}>
        Led a project evaluating multimodal LLMs on 2.4K+ YouTube ads using audio, visual, and metadata cues. Proposed <strong>DAVSP</strong>, a sampling pipeline reducing processing cost by 21.4× with minimal accuracy loss. Built a codebook based on YouTube’s child safety guidelines and released labeled dataset, codebook, and code.
      </p>

      {sectionHeader('Real-time Privacy-Preserving Smart Glasses')}
      <h3 style={styles.subheading}>
        <span style={{ color: darkMode ? '#c1186dff' : '#c1186dff', fontWeight: 'bold' }}>
          [In Submission]
        </span>{' '}
        Now You See Me, Now You Don't: Consent-Driven Privacy System for Smart Glasses
      </h3>
      <p style={{ fontSize: '0.85rem', marginTop: '-0.25rem', marginBottom: '0.75rem', color: darkMode ? '#f8ddecff' : '#444' }}>
        Yahya Khawaja, <strong>Eman Nabeel</strong>, Sana Humayun, Eruj Javed, Muhammad Hamad Alizai, Naveed Anwar Bhatti, Katharina Krombholz
      </p>
      <p style={{ fontSize: '0.75rem', marginTop: '-0.5rem', marginBottom: '0.75rem', color: darkMode ? '#f5f5f5' : '#777' }}>
        In Collaboration with CISPA Helmholtz Center for Information Security (CISPA)
      </p>
      <p style={styles.paragraph}>
        Built a real-time edge pipeline using face detection and landmarks to enable bystander privacy in smart glasses including blurring, synthetic face replacement and face restoration. Designed a consent-trigger protocol based on user ID and facial embeddings. Code for implementation and APK will be made open-source.
      </p>

      {sectionHeader('HCI Evaluation of YouTube Guidelines')}
      <h3 style={styles.subheading}>
        <span style={{ color: '#c1186dff', fontWeight: 'normal' }}>[In Progress]</span>{' '}
        Cultural Perspectives on Inappropriate Content: A Study with Pakistani Parents
      </h3>
      <p style={{
        ...styles.paragraph,
        fontSize: '0.85rem',
        marginTop: '-0.5rem',
        marginBottom: '0.5rem',
        color: darkMode ? '#f8ddecff' : '#444'
      }}>
        <strong>Eman Nabeel</strong>, Yahya Khawaja, Maryam Mustafa, Zafar Ayyub Qazi
      </p>
      <p style={styles.paragraph}>
        Conducted a user study with Pakistani parents to examine how they label inappropriate content in children's YouTube videos compared to YouTube’s own moderation guidelines. The study explores cultural interpretations of appropriateness, with comparisons across socio-economic groups and between mothers and fathers to surface nuanced differences in perception.
      </p>

      {sectionHeader('Evaluating LLM Guardrails for Child Safety')}
      <h3 style={styles.subheading}>
        <span style={{ color: '#c1186dff', fontWeight: 'normal' }}>[In Progress]</span>{' '}
        Testing LLM Guardrails Against Child-Safety Violations
      </h3>
      <p style={{
        ...styles.paragraph,
        fontSize: '0.85rem',
        marginTop: '-0.5rem',
        marginBottom: '0.5rem',
        color: darkMode ? '#f8ddecff' : '#444'
      }}>
        <strong>Eman Nabeel</strong>, Zaeem Khan, Zafar Ayyub Qazi
      </p>
      <p style={styles.paragraph}>
        Investigating how LLMs respond to child-framed prompts around age-inappropriate themes using established taxonomies. Working on developing a multimodal benchmark to evaluate the consistency and robustness of safety guardrails across models, modalities, and prompt types.
      </p>

      {sectionHeader('LLM-powered Robot for Fetching Tasks')}
      <h3 style={styles.subheading}>
        <a
          href="https://drive.google.com/file/d/1T2qn-eV0xIEb6e6qIwPi-U5Hl5fk7WEq/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: darkMode ? '#c1186dff' : '#c1186dff',
            textDecoration: 'none',
            // fontWeight: 'bold',
            marginRight: '0.75rem'
          }}
        >
          [PDF]
        </a>
        {/* <a
          href="https://drive.google.com/file/d/1owGtx1gfILRSnX3_03ZdcnRbUOPXOwAJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: darkMode ? '#f8ddecff' : '#c1186dff',
            textDecoration: 'none',
            // fontWeight: 'bold',
            marginRight: '0.75rem'
          }}
        >
          [Demo]
        </a> */}
        Mastani, Fetch For Me
      </h3>
      <p style={{ fontSize: '0.75rem', marginTop: '-0.5rem', marginBottom: '0.75rem', color: darkMode ? '#f5f5f5' : '#777' }}>
        JDS Robotics: Course Project
      </p>
      <div style={{
        position: 'relative',
        paddingBottom: '39.375%', // maintains 16:9 ratio for 70% width
        height: 0,
        overflow: 'hidden',
        marginBottom: '0.75rem'
      }}>
        <iframe
          src="https://drive.google.com/file/d/1owGtx1gfILRSnX3_03ZdcnRbUOPXOwAJ/preview"
          title="Video Demo"
          allow="autoplay"
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '60%',
            height: '100%',
            transform: 'translateX(-50%)',
            border: 'none',
            borderRadius: '8px',
          }}
        ></iframe>
      </div>

      <p style={{
        textAlign: 'center',
        fontSize: '0.85rem',
        marginBottom: '1.5rem',
        color: darkMode ? '#f5f5f5' : '#1a1a1a',
        fontFamily: 'Arial, sans-serif'
      }}>
        Video Demo of Mastani in Testing
      </p>
      <p style={styles.paragraph}>
        Designed a real-time object-fetching robot that uses Gemini LLMs for multi-lingual voice command understanding and vision-based object localization. Integrated an NVIDIA Jetson Nano, RealSense camera, and LiDAR for autonomous navigation, avoiding obstacles and precise grasping. Demonstrated robust voice-to-action mapping, multilingual support, and path planning in cluttered indoor spaces.
      </p>

      {sectionHeader('LLM-powered IP Geolocation')}
      <h3 style={styles.subheading}>
        <span style={{ color: darkMode ? '#c1186dff' : '#c1186dff', fontWeight: 'normal' }}>
          [In Progress]
        </span>{' '}
        Where is the Internet? Using LLMs and Reverse DNS to Geolocate Infrastructure IPs
      </h3>
      <p style={{ fontSize: '0.75rem', marginTop: '-0.5rem', marginBottom: '0.75rem', color: darkMode ? '#f5f5f5' : '#777' }}>
        In Collaboration with IFG Lab at University of Paris 8
      </p>
      <p style={styles.paragraph}>
        Investigated how LLMs can geolocate infrastructure IPs by parsing hostnames obtained via reverse DNS, leveraging RIPE Atlas traceroutes. Incorporated Matthew Luckie’s hostname-based geolocation database to extract and validate location codes.
      </p>

    </div>


  );
}

export default Projects;