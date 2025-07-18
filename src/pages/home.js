import React, { useState } from 'react';

function Home() {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

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
        <div style={styles.sectionHeader}>
            <h2 className="pixel-heading" style={{ margin: 0 }}>{title}</h2>
        </div>
    );

    return (
        <div style={styles.container}>
            {/* Top Profile + Speech Bubble */}
            <div style={styles.profileContainer}>
                <div style={styles.profileWrapper}>
                    <img
                        src={`${process.env.PUBLIC_URL}/my_photo2.jpg`}
                        alt="Eman"
                        style={styles.profileImage}
                    />
                    <div style={styles.bubbleWrapper}>
                        <img
                            src={`${process.env.PUBLIC_URL}/speech.png`}
                            alt="Speech bubble"
                            style={styles.bubbleImage}
                        />
                        <div style={styles.bubbleText}>
                            Hello,<br />I'm Eman!
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="pixel-title" style={{ textAlign: 'center' }}>Eman Nabeel</h1>

            <div style={styles.links}>
                <a href="mailto:26100270@lums.edu.pk" target="_blank">📧 Email</a>
                <a href="https://drive.google.com/file/d/19swjjqFG2qvBi9iHHBVbExSjsOR3JOwK/view?usp=share_link" target="_blank">📄 CV</a>
                <a href="https://linkedin.com/in/eman-nabeel-191aa9257" target="_blank">💼 LinkedIn</a>
                <a href="https://github.com/Eman96812" target="_blank">💻 GitHub</a>
            </div>

            {sectionHeader('About Me')}
            <p style={styles.paragraph}>
                I am a curious, driven developer who enjoys creating clean, user-friendly web apps.
                I love working with React, Node.js, and MongoDB, and exploring AI and machine learning in my free time.
            </p>

            {sectionHeader('Interests')}
            <ul>
                <li>Artificial Intelligence</li>
                <li>Open Source</li>
                <li>Digital Design</li>
                <li>Community Building</li>
            </ul>

            {sectionHeader('Contact')}
            <p>Email: 26100270@lums.edu.pk</p>
            <p>Alt Emails: eman.nabeel@lums.edu.pk | emannabeel03@gmail.com</p>
            <p>Feel free to reach out via email or LinkedIn!</p>

            <div style={styles.formContainer}>
                <form onSubmit={handleSubmit} style={styles.form}>
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
        maxWidth: '900px',
        margin: '0 auto',
    },
    profileContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '6rem', // adds space below navbar
        marginBottom: '2rem',
        position: 'relative', // so we can anchor absolutely inside
    },
    profileWrapper: {
        position: 'relative',
        width: 'fit-content',
        margin: '0 auto',
    },
    profileImage: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '4px solid #ccc',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    },
    bubbleWrapper: {
        position: 'absolute',
        top: '-60px',
        right: '-80px',
        width: '140px',
    },

    bubbleImage: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },

    bubbleText: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '0.70rem',
        color: '#c71585',
        lineHeight: '1.2',
        padding: '3.2rem 4.8rem 0 0.2rem', // optional to prevent overflow
        textAlign: 'center',
        pointerEvents: 'none', // ensures click passes through to bubble if needed
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: '2rem',
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '0.65rem',
        textAlign: 'center',
    },
    sectionHeader: {
        backgroundColor: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        marginTop: '2rem',
        marginBottom: '1rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    },
    paragraph: {
        lineHeight: '1.6',
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
        fontFamily: "'Courier New', monospace",
        fontSize: '0.9rem',
        border: '2px solid #ccc',
        borderRadius: '8px',
    },
    textarea: {
        padding: '0.75rem',
        fontFamily: "'Courier New', monospace",
        fontSize: '0.9rem',
        border: '2px solid #ccc',
        borderRadius: '8px',
        resize: 'vertical',
    },
    button: {
        backgroundColor: '#ff69b4',
        color: 'white',
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '0.7rem',
        padding: '0.75rem',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        textTransform: 'uppercase',
    }
};

export default Home;