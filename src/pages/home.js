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
            alert('❌ Please enter a valid email address.');
            return;
        }

        const response = await fetch('https://formspree.io/f/mkgzgjnz', {
            method: 'POST',
            body: data,
            headers: { Accept: 'application/json' },
        });

        if (response.ok) {
            alert('🎉 Message sent successfully!');
            form.reset();
        } else {
            alert('❌ Oops! Something went wrong.');
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
                Privacy | LLMs | Online Safety | AI for Systems | Tech Policy | HCI | Internet Research | IoT | HRI
            </p>

            <section style={styles.hero} className="heroGrid">
                <div style={styles.heroText}>
                    <p style={styles.paragraph}>
                        Hi, I’m Eman Nabeel, a fourth-year CS student at LUMS with a deep interest in the intersection of AI (specifically LLMs) and systems—especially where it touches on privacy and online safety. My current research explores how large language models (LLMs) can be used in scalable systems to tackle real-world challenges such as content moderation to make the internet safer and IP geolocation. I’m especially focused on child online safety, with it also being my senior thesis topic—supported by <a href="https://safeonline.global/meet-the-new-safe-online-grantees-2025/" target="_blank" rel="noopener noreferrer">Safe Online Global</a>—and have also worked on privacy-preserving technologies for bystanders in smart glasses.
                    </p>
                    <p style={styles.paragraph}>
                        I work jointly at the <strong>Systems &amp; AI Lab</strong> and the <strong>Internet, Data &amp; Society Lab</strong> at LUMS under the supervision of
                        <a href="https://web.lums.edu.pk/~zafar/" target="_blank" rel="noopener noreferrer"> Dr. Zafar Ayyub Qazi</a> and
                        <a href="https://www.ihsanqazi.com/" target="_blank" rel="noopener noreferrer"> Dr. Ihsan Ayyub Qazi</a>,
                        and also at the <strong>Embedded AI Lab</strong> at LUMS under
                        <a href="https://web.lums.edu.pk/~alizai/" target="_blank" rel="noopener noreferrer"> Dr. Hammad Alizai</a> and
                        <a href="https://naveedanwarbhatti.github.io" target="_blank" rel="noopener noreferrer"> Dr. Naveed Anwar Bhatti</a>.
                        I’ve recently begun working with{' '}
                        <a
                            href="https://www.maryamustafa.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: darkMode ? '#f8ddecff' : '#1a1a1a', textDecoration: 'none' }}
                        >
                            Dr. Maryam Mustafa
                        </a>{' '}
                        at the <strong>Interactive Media Lab</strong>, focusing on HCI-driven research in online child safety.
                        
                        {/* I’ve also collaborated with
                        <a href="https://www.geopolitique.net/our_team/frederick-douzet/" target="_blank" rel="noopener noreferrer"> Frédérick Douzet</a> and
                        <a href="https://www.univ-smb.fr/listic/en/presentation_listic/membres/enseignants-chercheurs/kave-salamatian/" target="_blank" rel="noopener noreferrer"> Kave Salamatian</a>
                        on the economics of internet shutdowns in Pakistan. */}
                    </p>
                    <p style={styles.paragraph}>
                        My coursework is strongly inclined toward systems and networking, including distributed systems, network security, OS, Applied Cryptography, and blockchain, backed by hands-on experience with LLMs and edge AI.
                    </p>
                </div>

                <div style={styles.heroMedia}>
                    <div style={styles.profileWrapper}>
                        <img
                            src={`${process.env.PUBLIC_URL}/my_photo2.jpg`}
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
                        <a href="https://drive.google.com/file/d/1FijzfrzznvfE1u8JuXAhhVp9cEZdz89B/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
                </div>
            </section>

            {sectionHeader('Research Interests')}
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {[
                    'Privacy and Online Safety',
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
};

export default Home;