import React, { useState } from 'react';

function Home({ darkMode, setDarkMode }) {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const email = data.get('email');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const response = await fetch('https://formspree.io/f/mkgzgjnz', {
            method: 'POST',
            body: data,
            headers: { Accept: 'application/json' },
        });

        if (response.ok) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Oops! Something went wrong.');
        }
    };

    const sectionHeader = (title) => (
        <div style={{
            ...styles.sectionHeader,
            backgroundColor: darkMode ? '#f8ddecff' : '#ece5e9ff',
        }}>
            <h2 style={{
                margin: 0,
                fontFamily: 'Arial, sans-serif',
                fontSize: '1rem',
                color: '#1a1a1a',
                fontWeight: 'bold',
            }}>
                {title}
            </h2>
        </div>
    );

    return (
        <div style={styles.container}>
            <h1 className="pixel-title" style={{
                textAlign: 'center',
                marginTop: '3.5rem',
                color: darkMode ? '#ffc0cb' : '#1a1a1a'
            }}>
                Eman Nabeel
            </h1>

            <p style={{
                textAlign: 'center',
                marginTop: '0.25rem',
                opacity: 0.85,
                fontFamily: 'Arial, sans-serif',
            }}>
                Undergraduate Student Researcher in Computer Science
            </p>

            <p style={{
                textAlign: 'center',
                marginTop: '0.25rem',
                opacity: 0.85,
                // color: '#ffc0cb',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold'
            }}>
                Privacy | AI (LLMs) | Online Safety | HCI | Tech Policy | Systems
            </p>

            <section style={styles.hero} className="heroGrid">
                <div style={styles.heroText}>
                    <p style={styles.paragraph}>
  Hi, I’m Eman, a fourth-year CS student at LUMS working in the domain of privacy and online safety. 
  My senior project focuses on using AI models, particularly large language models (LLMs), for content moderation 
  and making the web and digital tools safer for vulnerable groups such as children, supported by 
  <a href="https://safeonline.global/meet-the-new-safe-online-grantees-2025/" target="_blank" rel="noopener noreferrer"> Safe Online Global</a>. 
  My current research also includes broader privacy challenges, including web tracking pixels and privacy-preserving wearables.
</p>
                    <p style={styles.paragraph}>
                        I work jointly at the <strong>Systems &amp; AI Lab</strong> and the <strong>Internet, Data &amp; Society Lab</strong> at LUMS under the supervision of
                        <a href="https://web.lums.edu.pk/~zafar/" target="_blank" rel="noopener noreferrer"> Dr. Zafar Ayyub Qazi</a> and
                        <a href="https://www.ihsanqazi.com/" target="_blank" rel="noopener noreferrer"> Dr. Ihsan Ayyub Qazi</a> on Child Online Safety.
                        I’ve recently begun working with{' '}
                        <a
                            href="https://www.maryamustafa.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: darkMode ? '#f8ddecff' : '#1a1a1a', textDecoration: 'none' }}
                        >
                            Dr. Maryam Mustafa
                        </a>{' '}
                        at the <strong>Interactive Media Lab</strong>, on a project focusing on HCI-driven research in online child safety.

                        {/* I’ve also collaborated with
                        <a href="https://www.geopolitique.net/our_team/frederick-douzet/" target="_blank" rel="noopener noreferrer"> Frédérick Douzet</a> and
                        <a href="https://www.univ-smb.fr/listic/en/presentation_listic/membres/enseignants-chercheurs/kave-salamatian/" target="_blank" rel="noopener noreferrer"> Kave Salamatian</a>
                        on the economics of internet shutdowns in Pakistan. */}
                    </p>
                    <p style={styles.paragraph}>
                        Previosuly, I have worked with 
                        <a href="https://web.lums.edu.pk/~alizai/" target="_blank" rel="noopener noreferrer"> Dr. Hammad Alizai</a> and
                        <a href="https://naveedanwarbhatti.github.io" target="_blank" rel="noopener noreferrer"> Dr. Naveed Anwar Bhatti</a> at the <strong>Embedded AI Lab</strong> at LUMS focused on privacy-preserving technologies for bystanders in smart glasses.
                    </p>
                    <p style={styles.paragraph}>
            Beyond LUMS, I’ve also collaborated on <strong>privacy and web-transparency research</strong> with{' '}
            <a
                href="https://web.cs.ucdavis.edu/~zubair/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: darkMode ? '#f8ddecff' : '#1a1a1a', textDecoration: 'none' }}
            >
                Dr. Zubair Shafiq
            </a>{' '}
            at the <strong>University of California, Davis</strong>, where I analyze Google Tag Manager configurations to extract and study third-party tracking pixels' (e.g., Meta, TikTok, Snapchat) events for insights into online tracking practices.
        </p>

                    <p style={styles.paragraph}>
                        My coursework is strongly inclined toward systems, AI, and networking, including distributed systems, Topics in Large Language Models, Deep Learning, Network Security, OS, Applied Cryptography, and Blockchain, backed by hands-on experience with LLMs and edge AI.
                    </p>
                </div>

                <div style={styles.heroMedia}>
                    <div style={styles.profileWrapper}>
                        <img
                            src={`${process.env.PUBLIC_URL}/my_photo2.jpeg`}
                            alt="Portrait of Eman"
                            style={styles.profileImage}
                        />
                    </div>

                    <div style={styles.iconLinks}>
                        <a href="mailto:26100270@lums.edu.pk" target="_blank" rel="noopener noreferrer">
                            <img
                                src={`${process.env.PUBLIC_URL}/${darkMode ? 'mail-light.png' : 'mail.png'}`}
                                alt="Email"
                                style={styles.icon}
                            />
                        </a>
                        <a href="https://drive.google.com/file/d/130P2V7axPQAzYwWYx1zhqrNjRmlzxN_I/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <img
                                src={`${process.env.PUBLIC_URL}/${darkMode ? 'cv-pink.png' : 'cv.png'}`}
                                alt="CV"
                                style={styles.icon}
                            />
                        </a>
                        <a href="https://linkedin.com/in/eman-nabeel-191aa9257" target="_blank" rel="noopener noreferrer">
                            <img
                                src={`${process.env.PUBLIC_URL}/${darkMode ? 'linkedin-light.png' : 'linkedin.png'}`}
                                alt="LinkedIn"
                                style={styles.icon}
                            />
                        </a>
                        <a href="https://github.com/Eman96812" target="_blank" rel="noopener noreferrer">
                            <img
                                src={`${process.env.PUBLIC_URL}/${darkMode ? 'github-light.png' : 'github.png'}`}
                                alt="GitHub"
                                style={styles.icon}
                            />
                        </a>
                    </div>
                    <div
  style={{
    ...styles.newsBox,
    backgroundColor: darkMode ? '#1f1f1f' : '#fff',
    color: darkMode ? '#f5f5f5' : '#1a1a1a',
    border: darkMode ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.06)',
  }}
>
    <h3
  style={{
    ...styles.newsTitle,
    color: darkMode ? '#f8ddecff' : '#1a1a1a',
  }}
>
  Recent News
</h3>
    <ul style={styles.newsList}>
        <li>
            <strong
    style={{
      color: darkMode ? '#d11498ff' : '#d11498ff', // dark pink
      fontWeight: 'bold',
    }}
  >
    Dec 2025
  </strong>
  {' '}- I will be attending and presenting our work on bystander privacy in smart glasses at <strong>IEEE PerCom 2026 (A*)</strong> in Italy in March.
        </li>
        <li>
            <strong
    style={{
      color: darkMode ? '#d11498ff' : '#d11498ff', // dark pink
      fontWeight: 'bold',
    }}
  >
    Dec 2025
  </strong>
  {' '}- Our work <em>"Now You See Me, Now You Don't: Consent-Driven Privacy in Smart Glasses"</em> has been accepted at <strong>IEEE PerCom 2026</strong> (15.62% acceptance rate).
        </li>
        <li>
            <strong
    style={{
      color: darkMode ? '#d11498ff' : '#d11498ff', // dark pink
      fontWeight: 'bold',
    }}
  >
    Nov 2025
  </strong>
  {' '}- Our federal-level policy framework based on my work on automated content moderation using LLMs for child online safety and blockchain-based age verification system won first runner-up at the <strong>8th Annual MIT Tech and Policy Hackathon</strong>.
        </li>
        <li>
            <strong
    style={{
      color: darkMode ? '#d11498ff' : '#d11498ff', // dark pink
      fontWeight: 'bold',
    }}
  >
    Sept 2025
  </strong>
  {' '}- I have been appointed as <strong>Teaching Assistant</strong> for CS370: Operating Systems and CS5812: Introduction to Blockchain Technologies for Fall 2025 at LUMS.
        </li>
        <li>
            <strong
    style={{
      color: darkMode ? '#d11498ff' : '#d11498ff', // dark pink
      fontWeight: 'bold',
    }}
  >
    March 2025
  </strong>
  {' '}- I have received the <strong>PHC Periodt Research Mobility Grant</strong> for cross-national collaboration with University of Paris 8 to study internet shutdowns and LLM-powered IP geolocation.

        </li>
        <li>
            <strong
    style={{
      color: darkMode ? '#d11498ff' : '#d11498ff', // dark pink
      fontWeight: 'bold',
    }}
  >
    Jan 2025
  </strong>
  {' '}- I have been appointed as <strong>Teaching Assistant</strong> for CS382: Network-Centric Computing for Spring 2025 at LUMS.

        </li>
        <li>
            <strong
    style={{
      color: darkMode ? '#d11498ff' : '#d11498ff', // dark pink
      fontWeight: 'bold',
    }}
  >
    June 2024 - Sept 2024
  </strong>
  {' '}- My team and I have won the <strong>teaching and learning grant</strong> to redesign CS200, core programming course at LUMS, and introduce a coding helper bot in labs. I have also been appointed as the <strong>Head Teaching Assistant</strong> for CS200 for Fall 2024.

        </li>
        <li>
            <strong
    style={{
      color: darkMode ? '#d11498ff' : '#d11498ff', // dark pink
      fontWeight: 'bold',
    }}
  >
    Jan 2024
  </strong>
  {' '}- I have been appointed as <strong>Teaching Assistant</strong> for CS200: Introduction to Programming for Fall 2024 at LUMS.

        </li>
    </ul>
</div>
                </div>
            </section>

            {sectionHeader('Research Interests')}
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {[
                    'Privacy, Online Safety and Policy',
                    'AI & LLMs for Scalable System Designs',
                    'HCI',
                    'Security',
                    'Networks and Internet Measurements',
                ].map((interest, i) => (
                    <li key={i} style={{
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '0.9rem',
                        marginBottom: '0.4rem',
                        display: 'flex',
                        alignItems: 'center',
                        color: darkMode ? '#f5f5f5' : '#000',
                    }}>
                        <span style={{
                            color: '#f8ddecff',
                            fontSize: '0.75rem',
                            marginRight: '0.75rem',
                        }}>
                            ■
                        </span>
                        {interest}
                    </li>
                ))}
            </ul>

            {sectionHeader('Random Fact about Me')}
            <p style={styles.paragraph}>
                I have 12 cats and am in the process of convincing my parents to get me a dog :).
            </p>

            {sectionHeader('Contact')}
            <p>
                Email:{' '}
                <a href="mailto:26100270@lums.edu.pk" style={{ textDecoration: 'none', color: darkMode ? '#ffc0cb' : '#1a1a1a', fontWeight: 'bold' }}>
                    26100270@lums.edu.pk
                </a>
            </p>
            <p>
                Alt Emails:{' '}
                <a href="mailto:eman.nabeel@lums.edu.pk" style={{ textDecoration: 'none', color: darkMode ? '#ffc0cb' : '#1a1a1a', fontWeight: 'bold' }}>
                    eman.nabeel@lums.edu.pk
                </a>{' '}
                |{' '}
                <a href="mailto:emannabeel03@gmail.com" style={{ textDecoration: 'none', color: darkMode ? '#ffc0cb' : '#1a1a1a', fontWeight: 'bold' }}>
                    emannabeel03@gmail.com
                </a>
            </p>

            <div style={styles.formContainer}>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input type="email" name="email" placeholder="Your Email" required style={styles.input} />
                    <input type="text" name="subject" placeholder="Message Title" required style={styles.input} />
                    <textarea name="message" placeholder="Type your message..." required rows="5" style={styles.textarea} />
                    <button type="submit" style={styles.button}>Send</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '1rem',
        maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    },
    hero: {
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '2rem',
        alignItems: 'start',
        marginTop: '2rem',
    },
    heroText: {
        fontSize: '1rem',
        lineHeight: 1.7,
    },
    heroMedia: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
    },
    profileWrapper: {
        width: '250px', // increased for better visibility
        height: '250px',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '4px solid #ccc',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    },
    iconLinks: {
        display: 'flex',
        gap: '0.75rem',
        justifyContent: 'center',
        marginTop: '0.5rem',
    },
    icon: {
        width: '28px',
        height: '28px',
        objectFit: 'contain',
    },
    sectionHeader: {
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        marginTop: '2rem',
        marginBottom: '1rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    },
    paragraph: {
        lineHeight: 1.7,
        marginBottom: '1rem',
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        maxWidth: '600px',
    },
    input: {
        padding: '0.75rem',
        fontSize: '0.9rem',
        border: '2px solid #ccc',
        borderRadius: '8px',
    },
    textarea: {
        padding: '0.75rem',
        fontSize: '0.9rem',
        border: '2px solid #ccc',
        borderRadius: '8px',
        resize: 'vertical',
    },
    button: {
        backgroundColor: '#f8ddecff',
        color: '#1a1a1a',
        fontSize: '0.7rem',
        padding: '0.75rem',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        textTransform: 'uppercase',
    },
    newsBox: {
    width: '100%',
    maxWidth: '470px',
    backgroundColor: '#fff',
    padding: '0.75rem',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    fontSize: '0.75rem',
},

newsTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    textAlign: 'center',
},

newsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: 1.5,
},
};

export default Home;