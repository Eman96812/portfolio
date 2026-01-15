import React from "react";

function Projects({ darkMode }) {
  const sectionHeader = (title) => (
    <div
      style={{
        backgroundColor: darkMode ? "#f8ddecff" : "#ece5e9ff",
        padding: "0.5rem 1rem",
        borderRadius: "8px",
        marginTop: "2rem",
        marginBottom: "0.5rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        className="pixel-heading"
        style={{
          margin: 0,
          color: "#1a1a1a",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {title}
      </h2>
    </div>
  );

  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "2rem 1rem",
      fontFamily: "Arial, sans-serif",
      color: darkMode ? "#f5f5f5" : "#1a1a1a",
    },
    title: {
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      color: darkMode ? "#ffc0cb" : "#1a1a1a",
    },
    subheading: {
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
      fontSize: "1.05rem",
      marginBottom: "0.5rem",
      color: darkMode ? "#ffffff" : "#000000",
    },
    paragraph: {
      marginBottom: "1.25rem",
      lineHeight: "1.6",
      fontFamily: "Arial, sans-serif",
      fontSize: "0.92rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 className="pixel-title" style={styles.title}>
        Projects and Publications
      </h1>

      {sectionHeader("LLM-powered System for Multi-modal Content Moderation")}
      <h3 style={styles.subheading}>
        <span
          style={{
            color: darkMode ? "#c1186dff" : "#c1186dff",
            fontWeight: "bold",
          }}
        >
          [In Submission]
        </span>{" "}
        Safeguarding Children at Scale: Cost-Effective Multimodal LLM Detection
        of Inappropriate YouTube Advertising
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          marginTop: "-0.25rem",
          marginBottom: "0.75rem",
          color: darkMode ? "#f8ddecff" : "#444",
        }}
      >
        Advisor(s):{" "}
        <a
          href="https://web.lums.edu.pk/~zafar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Zafar Ayyub Qazi
        </a>
        ,{" "}
        <a
          href="https://www.ihsanqazi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Ihsan Ayyub Qazi
        </a>
      </p>
      <p style={styles.paragraph}>
        Proposed the Dynamic Adaptive Visual Sampling Pipeline (DAVSP): a multimodal framework that integrates transcriptions (as efficient substitutes for audio), semantically sampled frames (as substitutes for full video), and video metadata (for contextual enrichment) to reduce processing costs in automatically detecting unsafe YouTube ads appearing on Made for Kids videos using multimodal LLMs. Our pipeline achieved accuracy and F1-score within 1 percentage point of full video processing while lowering processing cost by 21.4x of full video input
 Built a codebook based on YouTube's advertising guidelines and annotated a dataset of 2500 video ads, achieving a Cohen's Kappa of 0.903.      </p>

      {sectionHeader("Real-time Privacy-Preserving Smart Glasses")}
      <h3 style={styles.subheading}>
        <span
          style={{
            color: darkMode ? "#c1186dff" : "#c1186dff",
            fontWeight: "bold",
          }}
        >
          [Accepted at IEEE PerCom 2026 (15.62% Acceptance Rate, A*)]
        </span>{" "}
        Now You See Me, Now You Don't: Consent-Driven Privacy System for Smart
        Glasses
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          marginTop: "-0.25rem",
          marginBottom: "0.75rem",
          color: darkMode ? "#f8ddecff" : "#444",
        }}
      >
        Advisor(s):{" "}
        <a
          href="https://web.lums.edu.pk/~alizai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Muhammad Hamad Alizai
        </a>
        ,{" "}
        <a
          href="https://naveedanwarbhatti.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Naveed Anwar Bhatti
        </a>
        ,{" "}
        <a
          href="https://profiles.cispa.de/katharina.krombholz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Katharina Krombholz
        </a>
      </p>
      <p
        style={{
          fontSize: "0.75rem",
          marginTop: "-0.5rem",
          marginBottom: "0.75rem",
          color: darkMode ? "#f5f5f5" : "#777",
        }}
      >
        In Collaboration with CISPA Helmholtz Center for Information Security
        (CISPA)
      </p>
      <p style={styles.paragraph}>
        Proposed Secure In-camera
Total Anonymization, Restoration on Authorization (SITARA), a real-time smart glasses pipeline for bystander anonymization using edge-based face detection and synthetic face replacement, working with face detection and landmark models while adding optimisations for real-time deployment and added a consent-trigger
        protocol based on user ID and facial embeddings. Created a specially curated dataset using META glasses across categories like number of faces, distance from faces, movement types and annotated 16,500 frames for evaluation. Rigorously evaluated the pipeline in terms of detection accuracy, storage overhead, processing time, and energy consumption, achieving comparable average precision (0.98) and recall (0.99) to EgoBlur (Meta’s blurring pipeline) while operating in real time, with only 24% storage overhead and 2.8x the baseline energy usage.
      </p>

      {sectionHeader("Evaluating LLM Guardrails for Child Safety")}
      <h3 style={styles.subheading}>
        <span style={{ color: "#c1186dff", fontWeight: "normal" }}>
          [In Progress]
        </span>{" "}
        Testing LLM Guardrails Against Child-Safety Violations
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          marginTop: "-0.5rem",
          marginBottom: "0.5rem",
          color: darkMode ? "#f8ddecff" : "#444",
        }}
      >
        Advisor(s):{" "}
        <a
          href="https://web.lums.edu.pk/~zafar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Zafar Ayyub Qazi
        </a>
      </p>
      <p style={styles.paragraph}>
         Investigating multi-turn conversational LLM responses to child-framed indirect malicious prompts using a taxonomy-based evaluation through red teaming. Evaluating propriety LLMs (Gemini, GPT, Claude) on metrics such as refusal rate, breach rate, etc., and analysing response nature and behaviour of LLMs across categories (inappropriate language, drugs, etc.).
      </p>

      {sectionHeader("Federal-level Policy Framework for enhanced child online safety")}
      <h3 style={styles.subheading}>
        <p
  style={{
    fontSize: "0.8rem",
    marginTop: "-0.25rem",
    marginBottom: "0.75rem",
  }}
>
  <a
    href="https://drive.google.com/file/d/1X7ad5Gtsvaqx8WafcluTl_JP01MM_cAr/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: darkMode ? "#f8ddecff" : "#c1186dff",
      textDecoration: "none",
      fontWeight: "bold",
      marginRight: "1rem",
    }}
  >
    [Policy Memo]
  </a>

  <a
    href="https://drive.google.com/file/d/1KE1z6TWxp3p3zdBhw_K_CK2RtpFDbS3h/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: darkMode ? "#f8ddecff" : "#c1186dff",
      textDecoration: "none",
      fontWeight: "bold",
      marginRight: "1rem",
    }}
  >
    [Presentation]
  </a>


  <a
    href="https://drive.google.com/file/d/1H07ovxy01Speh2zRupComx03KvFVGii_/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: darkMode ? "#f8ddecff" : "#c1186dff",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    [Certificate]
  </a>
</p>
        <span style={{ color: "#c1186dff", fontWeight: "bold" }}>
          [First Runner-Up at the 8th Annual MIT Tech Policy Hackathon]
        </span>{" "}
        Unprotected Clicks: Increasing Child Safety Through Federal Advertisement Regulation
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          marginTop: "-0.5rem",
          marginBottom: "0.5rem",
          color: darkMode ? "#f8ddecff" : "#444",
        }}
      >
      </p>
      <p style={styles.paragraph}>
         We proposed a
two-step framework for Youth protection from advertising on digital platforms. Our policy aimed to
establish a common framework between states by first implementing standardized definitions, a federal
baseline regulation of illegal content, automated content moderation systems, and an age verification system, and second, established a
supplementary state-level moderation in accordance with state constituents’ resources and beliefs.
Additionally, we recommended a future-proof solution by establishing state-based Youth Advisory Boards
to co-design future online safety policies.
      </p>


      {sectionHeader("HCI Evaluation of YouTube Guidelines")}
      <h3 style={styles.subheading}>
        <span style={{ color: "#c1186dff", fontWeight: "normal" }}>
          [In Progress]
        </span>{" "}
        Cultural Perspectives on Inappropriate Content: A Study with Pakistani
        Parents
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          marginTop: "-0.5rem",
          marginBottom: "0.5rem",
          color: darkMode ? "#f8ddecff" : "#444",
        }}
      >
        Advisor(s):{" "}
        <a
          href="https://www.maryamustafa.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Maryam Mustafa
        </a>
        ,{" "}
        <a
          href="https://web.lums.edu.pk/~zafar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Zafar Ayyub Qazi
        </a>
      </p>
      <p style={styles.paragraph}>
        Conducted a user study with Pakistani parents to examine how they label
        inappropriate content in children's YouTube videos compared to YouTube’s
        own moderation guidelines. The study explores cultural interpretations
        of appropriateness, with comparisons across socio-economic groups and
        between mothers and fathers to surface nuanced differences in
        perception.
      </p>

      {sectionHeader(
        "Analyzing Google Tag Manager Configurations for Web Tracking Transparency"
      )}
      <h3 style={styles.subheading}>
        <span style={{ color: "#c1186dff", fontWeight: "normal" }}>
          [In Progress]
        </span>{" "}
        Analyzing Google Tag Manager Configurations to Uncover Third-Party
        Tracking
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          marginTop: "-0.5rem",
          marginBottom: "0.5rem",
          color: darkMode ? "#f8ddecff" : "#444",
        }}
      >
        Advisor(s):{" "}
        <a
          href="https://web.cs.ucdavis.edu/~zubair/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Zubair Shafiq
        </a>
      </p>
      <p style={styles.paragraph}>
        Analyzing Google Tag Manager (GTM) configurations to identify embedded
        third-party tracking pixels such as Meta,
        TikTok, and Snapchat and their events. Developing methods to reverse engineer the{" "}
        <code>gtm.js</code> file of websites, de-minifying JavaScript to extract
        events, triggers, and associated tags for transparency and auditing of
        online tracking practices to identify types of tags set on sites.
      </p>

      
      {sectionHeader("LLM-powered Robot for Fetching Tasks")}
      <h3 style={styles.subheading}>
        <span
          style={{
            color: darkMode ? "#c1186dff" : "#c1186dff",
            fontWeight: "normal",
          }}
        >
          [Course Project]
        </span>{" "}
        <a
          href="https://drive.google.com/file/d/1T2qn-eV0xIEb6e6qIwPi-U5Hl5fk7WEq/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: darkMode ? "#c1186dff" : "#c1186dff",
            textDecoration: "none",
            // fontWeight: 'bold',
            marginRight: "0.75rem",
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
      <p
        style={{
          fontSize: "0.75rem",
          marginTop: "-0.5rem",
          marginBottom: "0.75rem",
          color: darkMode ? "#f5f5f5" : "#777",
        }}
      >
        JDS Robotics: Course Project
      </p>
      <p
        style={{
          fontSize: "0.85rem",
          marginTop: "-0.25rem",
          marginBottom: "0.5rem",
          color: darkMode ? "#f8ddecff" : "#444",
        }}
      >
        Advisor(s): <strong>Dr. Hassan Jaleel</strong>
      </p>
      <div
        style={{
          position: "relative",
          paddingBottom: "39.375%", // maintains 16:9 ratio for 70% width
          height: 0,
          overflow: "hidden",
          marginBottom: "0.75rem",
        }}
      >
        <iframe
          src="https://drive.google.com/file/d/1owGtx1gfILRSnX3_03ZdcnRbUOPXOwAJ/preview"
          title="Video Demo"
          allow="autoplay"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: "60%",
            height: "100%",
            transform: "translateX(-50%)",
            border: "none",
            borderRadius: "8px",
          }}
        ></iframe>
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: "0.85rem",
          marginBottom: "1.5rem",
          color: darkMode ? "#f5f5f5" : "#1a1a1a",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Video Demo of Mastani in Testing
      </p>
      <p style={styles.paragraph}>
        Designed a real-time object-fetching robot that uses Gemini LLMs for
        multi-lingual voice command understanding and vision-based object
        localization. Integrated an NVIDIA Jetson Nano, RealSense camera, and
        LiDAR for autonomous navigation, avoiding obstacles and precise
        grasping. Demonstrated robust voice-to-action mapping, multilingual
        support, and path planning in cluttered indoor spaces.
      </p>

      {sectionHeader("LLM-powered IP Geolocation")}
      <h3 style={styles.subheading}>
        {/* <span style={{ color: darkMode ? '#c1186dff' : '#c1186dff', fontWeight: 'normal' }}>
          [Wrapped Up]
        </span>{' '} */}
        Where is the Internet? Using LLMs and Reverse DNS to Geolocate
        Infrastructure IPs
      </h3>

      <p
        style={{
          fontSize: "0.75rem",
          marginTop: "-0.5rem",
          marginBottom: "0.75rem",
          color: darkMode ? "#f5f5f5" : "#777",
        }}
      >
        In Collaboration with IFG Lab at University of Paris 8 - Worked for a
        very short period of time on this
      </p>
      <p
        style={{
          fontSize: "0.85rem",
          marginTop: "-0.25rem",
          marginBottom: "0.5rem",
          color: darkMode ? "#f8ddecff" : "#444",
        }}
      >
        Advisor(s):{" "}
        <a
          href="https://web.lums.edu.pk/~zartash/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Zartash Afzal Uzmi
        </a>
        ,{" "}
        <a
          href="https://web.lums.edu.pk/~zafar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Zafar Ayyub Qazi
        </a>
        ,{" "}
        <a
          href="https://cyberpeaceinstitute.org/teams/frederick-douzet/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Frédérick Douzet
        </a>
      </p>
      <p style={styles.paragraph}>
        Investigated how LLMs can geolocate infrastructure IPs by parsing
        hostnames obtained via reverse DNS, leveraging RIPE Atlas traceroutes.
        Incorporated Matthew Luckie’s hostname-based geolocation database to
        extract and validate location codes.
      </p>
    </div>
  );
}

export default Projects;
