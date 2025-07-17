import React, { useState } from 'react';

function Home() {
    const [formStatus, setFormStatus] = useState('');

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

    return (
        <div>

            <div style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginBottom: '3rem',
                marginTop: '7rem'
            }}>
                {/* Profile Image */}
                <img
                    src={`${process.env.PUBLIC_URL}/my_photo2.jpg`}
                    alt="Your portrait"
                    style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                        objectPosition: 'center', // keeps the face centered
                        transform: 'scale(1.2)', // zooms in
                        borderRadius: '50%',
                        border: '4px solid #ccc',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease'
                    }}
                />

                {/* Speech bubble image */}
                <img
                    src={`${process.env.PUBLIC_URL}/speech.png`}
                    alt="Speech bubble"
                    style={{
                        position: 'absolute',
                        top: '-110px',       // higher than before
                        left: 'calc(50% + 80px)', // offset relative to center
                        width: '160px',
                        height: 'auto',
                        zIndex: 5
                    }}
                />

                {/* Text inside the bubble */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',         // adjust for better vertical placement
                    left: 'calc(50% + 105px)', // aligned inside the bubble
                    width: '120px',
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '0.65rem',
                    color: '##c71585',
                    lineHeight: '1.3',
                    zIndex: 6
                }}>
                    Hi,<br />I'm Eman!
                </div>
            </div>

            <h1 className="pixel-title" style={{ textAlign: 'center' }}>Eman Nabeel</h1>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                marginBottom: '2rem',
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '0.65rem',
                textAlign: 'center'
            }}>
                <a href="mailto:26100270@lums.edu.pk" target="_blank" rel="noopener noreferrer">📧 Email</a>
                <a href="https://drive.google.com/file/d/19swjjqFG2qvBi9iHHBVbExSjsOR3JOwK/view?usp=share_link" target="_blank" rel="noopener noreferrer">📄 CV</a>
                <a href="https://linkedin.com/in/eman-nabeel-191aa9257" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                <a href="https://github.com/Eman96812" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
            </div>



            {sectionHeader('About Me')}
            <p>
                I am a curious, driven developer who enjoys creating clean, user-friendly web apps. I love working with React, Node.js, and MongoDB, and exploring AI and machine learning in my free time.
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
            <p>Alternative Email(s): eman.nabeel@lums.edu.pk | emannabeel03@gmail.com</p>
            <p>Feel free to reach out via email or LinkedIn!</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        width: '100%',
                        maxWidth: '600px'
                    }}
                >
                    <input
                        type="text"
                        name="subject"
                        placeholder="Message Title"
                        required
                        style={{
                            padding: '0.75rem',
                            fontFamily: "'Courier New', monospace",
                            fontSize: '0.9rem',
                            border: '2px solid #ccc',
                            borderRadius: '8px'
                        }}
                    />
                    <textarea
                        name="message"
                        placeholder="Type your message..."
                        required
                        rows="5"
                        style={{
                            padding: '0.75rem',
                            fontFamily: "'Courier New', monospace",
                            fontSize: '0.9rem',
                            border: '2px solid #ccc',
                            borderRadius: '8px',
                            resize: 'vertical'
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#ff69b4',
                            color: 'white',
                            fontFamily: "'Press Start 2P', cursive",
                            fontSize: '0.7rem',
                            padding: '0.75rem',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            textTransform: 'uppercase'
                        }}
                    >
                        Send
                    </button>

                    {formStatus === 'SUCCESS' && (
                        <p style={{ color: 'green', fontFamily: "'Courier New', monospace" }}>
                            🎉 Message sent successfully!
                        </p>
                    )}
                    {formStatus === 'ERROR' && (
                        <p style={{ color: 'red', fontFamily: "'Courier New', monospace" }}>
                            ❌ Oops! Something went wrong.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Home;