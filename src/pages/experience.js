import React from 'react';
import { Link } from 'react-router-dom';

function Experience({ darkMode }) {
    const sectionHeader = (title) => (
        <div
            style={{
                backgroundColor: darkMode ? '#f8ddecff' : '#ece5e9ff',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                marginTop: '2rem',
                marginBottom: '1rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
        >
            <h2
                className="pixel-heading"
                style={{
                    margin: 0,
                    color: darkMode ? '#1a1a1a' : '#1a1a1a',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '1.07rem'  // increase as needed (1.4rem, 1.5rem, etc.)
                }}
            >
                {title}
            </h2>
        </div>
    );

    const subHeader = (roleNode, courseNode, period) => (
        <div style={{ margin: '1rem 0 0.25rem' }}>
            <h3 style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
                <span
                    style={{
                        fontSize: '0.95rem',
                        fontWeight: 'bold',
                        color: darkMode ? '#ffffff' : '#000000',
                    }}
                >
                    {roleNode}
                </span>{' '}
                <span style={{ fontSize: '0.95rem', fontWeight: 'normal' }}>
                    {courseNode}
                </span>
            </h3>
            {period && (
                <p
                    style={{
                        margin: '0.25rem 0 0',
                        fontSize: '0.85rem',
                        color: darkMode ? '#f8ddecff' : '#c71585',
                        fontFamily: 'Arial, sans-serif',
                    }}
                >
                    {period}
                </p>
            )}
        </div>
    );

    const paragraphStyle = {
        marginBottom: '1rem',
        lineHeight: '1.6',
        fontFamily: 'Arial, sans-serif',
        fontSize: '0.92rem'
    };

    const courses = [
        'CS6303: Topics in LLMs',
        'CS582: Distributed Systems',
        'CS473: Network Security',
        'CS5803: Applied Cryptography',
        'CS382: Network Centric Computing',
        'CS437: Deep Learning',
        'CS370: Operating Systems',
        'CS677: Internet of Things',
        'EE3002: Junior Design Studio Robotics',
        'CS3812: Blockchain Technologies and Applications',
        'CS331: Introduction to AI',
        'CS310: Algorithms',
        'CS220: Digital Logic Circuits',
        'CS202: Data Structures',
        'CS210: Discrete Mathematics',
        'CS300: Advanced Programming',
        'CS225: Fundamentals of Computer Systems',
        'CS200: Introduction to Programming',
        'CS340: Databases',
    ];

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem', fontFamily: 'Arial, sans-serif' }}>
            <h1
                className="pixel-title"
                style={{
                    textAlign: 'center',
                    color: darkMode ? '#ffc0cb' : '#1a1a1a',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                Experience and Awards
            </h1>

            {sectionHeader('Research')}
            <h3
                style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '1rem',
                    marginBottom: '0.75rem',
                    fontWeight: 'normal',
                }}
            >
                I talk more about my projects in the {' '}
                <Link
                    to="/projects"
                    style={{
                        textDecoration: 'none',
                        color: darkMode ? '#f5f5f5' : '#1a1a1a',
                        fontSize: '0.95rem'
                    }}
                >
                    <span style={{ fontWeight: 'bold' }}>Projects & Publications</span>
                </Link>{' '}
                section →
            </h3>
            {subHeader('Undergraduate Research Assistant - ', 'Systems & AI Lab in collab w/ Internet, Data & Society Lab (IDSL)', '(June 2024 - Present)')}
            <p style={paragraphStyle}>
                Focused on LLM-based systems for child online safety and evaluating LLM guardrails.
            </p>


            {subHeader('Undergraduate Research Intern - ', 'Interactive Media Lab (IML)', '(May 2025 - Present)')}
            <p style={paragraphStyle}>
                Focused on HCI-driven evaluation of cultural perspectives on child online safety by studying how Pakistani parents assess multi-modal inappropriate content.
            </p>

            {subHeader('Undergraduate Research Assistant - ', 'Embedded AI Lab', '(January 2025 - October 2025)')}
            <p style={paragraphStyle}>
                Focused on consent-driven bystander privacy in smart glasses, including anonymization, blurring, and synthetic face replacement techniques.
            </p>

            {subHeader('Research Intern - ', 'GEODE, IFG, University of Paris 8', '(Aug 2024 - July 2025)')}
            <p style={paragraphStyle}>
                Assessed tools for quantifying economic impact of internet shutdowns, conducted user studies with software houses, and explored LLMs for improved infrastructure IP geolocation.
            </p>
            <div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '2rem' }}>
                <img
                    src={`${process.env.PUBLIC_URL}/geode_team.jpg`}
                    alt="GEODE research team"
                    style={{
                        width: '80%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        display: 'block',
                        margin: '0 auto',
                    }}
                />
                <p
                    style={{
                        fontSize: '0.8rem',
                        // color: '#1a1a1a',
                        marginTop: '0.5rem',
                        fontFamily: 'Arial, sans-serif',
                    }}
                >
                    With the GEODE team at University of Paris 8 (IFG) - 25/3/25
                </p>
            </div>

            {sectionHeader('Teaching')}
            {subHeader('Teaching Assistant - ', 'CS370: Operating Systems', '(Jul 2025 - Dec 2025)')}
            <p style={paragraphStyle}>
                Helped students with C programming and kernel-level concepts; designed an assignment on memory management (physical, virtual, heap) and graded assignments and exams.
            </p>

            {subHeader('Teaching Assistant - ', 'CS3812: Blockchain Technologies and Applications', '(Jul 2025 - Dec 2025)')}
            <p style={paragraphStyle}>
                Helped students understand core blockchain concepts including proof-of-work, proof-of-stake, consensus mechanisms, decentralized systems, and cryptography. Also designed an assignment that involved implementing a stablecoin-based currency exchange from scratch and deploying it on Sepolia. Graded assignments and exams
            </p>
            {subHeader('Teaching Assistant - ', 'CS382: Network Centric Computing', '(Jan 2025 - Jun 2025)')}
            <p style={paragraphStyle}>
                Led tutorials for assignments on reliable network protocols, routing protocols (Link-State and Distance Vector), and distributed hash tables. Also graded assignments and exams.
            </p>

            {subHeader('Head Teaching Assistant - ', 'CS200: Introduction to Programming', '(June 2024 - Dec 2024)')}
            <p style={paragraphStyle}>
                Planned lectures, tutorials, assignments, and labs integrating LLM tools to teach core OOP concepts and C++ templates. Also checked exams, labs and assignments.
            </p>

            {subHeader('Teaching Assistant - ', 'CS200: Introduction to Programming', '(January 2024 - May 2024)')}
            <p style={paragraphStyle}>
                Planned tutorials, assignments, and labs to teach core OOP concepts and C++ templates; also evaluated labs and exams.
            </p>

            {sectionHeader('Grants')}
            {subHeader(
                <a
                    href="https://safeonline.global/meet-the-new-safe-online-grantees-2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: darkMode ? '#ffffff' : '#000000',
                        textDecoration: 'none',
                    }}
                >
                    Safe Online Global Grant
                </a>,
                '',
                '(June 2025)'
            )}
            <p style={paragraphStyle}>
                Awarded to our lab for our work on filtering harmful content in children's online media. Part of{' '}
                <a
                    href="https://safeonline.global/meet-the-new-safe-online-grantees-2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: darkMode ? '#ffc0cb' : '#0b0a0bff',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                >
                    Safe Online 2025 grantees
                </a>.
            </p>

            {subHeader(
                <a
                    href="https://www.pakistan.campusfrance.org/phc-peridot-research-mobility-program"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: darkMode ? '#ffffff' : '#000000',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                >
                    PHC Peridot Research Grant
                </a>,
                '',
                '(Mar 2025)'
            )}
            <p style={paragraphStyle}>
                Cross-national research collaboration with French labs on internet connectivity, as part of the{' '}
                <a
                    href="https://www.pakistan.campusfrance.org/phc-peridot-research-mobility-program"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: darkMode ? '#ffc0cb' : '#000000',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                >
                    PHC Peridot program
                </a>.
            </p>

            {subHeader(
                <a
                    href="https://lli.lums.edu.pk/teaching-learning-grants"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: darkMode ? '#ffffff' : '#000000',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                >
                    LUMS Learning Institute Teaching and Learning Grant
                </a>,
                '',
                '(June 2024)'
            )}
            <p style={paragraphStyle}>
                Awarded to redesign CS200 by incorporating AI tools into computational labs and course structure, as part of the{' '}
                <a
                    href="https://lli.lums.edu.pk/teaching-learning-grants"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: darkMode ? '#ffc0cb' : '#0e0c0dff',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                >
                    LUMS Learning Institute initiative
                </a>.
            </p>

            {sectionHeader('Academic Awards')}
            {subHeader("Dean's Honor List", '', '(2022–2026)')}
            <p style={paragraphStyle}>Maintained GPA in top 5% across 6 semesters.</p>

            {subHeader('Merit Scholarship', '', '(2023–2026)')}
            <p style={paragraphStyle}>Awarded to top 15 students based on academic record. My rank has been top 2%.</p>

            {sectionHeader('Coursework')}
            <ul
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '0.5rem 2rem',
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: 0,
                }}
            >
                {courses.map((course, i) => (
                    <li
                        key={i}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '0.9rem',
                            color: darkMode ? '#f5f5f5' : '#000',
                            margin: 0,
                        }}
                    >
                        <span
                            style={{
                                color: darkMode ? '#ff69b4' : 'rgba(0,0,0,0.1)',
                                fontSize: '0.75rem',
                                marginRight: '0.75rem',
                            }}
                        >
                            ■
                        </span>
                        {course}
                    </li>
                ))}
            </ul>

            {sectionHeader('Leadership Roles')}
            {subHeader('Vice President -', 'Society for Promotion and Development of Engineering and Sciences (SPADES)', '(2025–2026)')}
            <p style={paragraphStyle}>Led organizing committee of 1800+ student event and academic contests.</p>

            {subHeader('Convener PsiFi -', 'Society for Promotion and Development of Engineering and Sciences (SPADES)', '(2024–2025)')}
            <p style={paragraphStyle}>
                Oversaw events, tech outreach, and managed Pakistan's largest STEM olympiad.
            </p>

            {subHeader('Director Events -', 'Animal Welfare Society', '(2023–2024)')}
            <p style={paragraphStyle}>Organized LUMS’s first pet festival and raised shelter funds.</p>
        </div>
    );
}

export default Experience;