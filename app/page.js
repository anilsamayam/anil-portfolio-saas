
export default function Home() {
  return (
    <main className="container">

      <section className="hero">
        <img src="/images/hero.jpg" className="hero-img" />
        <h1>Anil Samayam</h1>
        <h2>AI Engineer & Integration Architect</h2>
        <p>
          Building scalable enterprise integration and AI-driven solutions.
        </p>
        <a href="/resume/Anil_Samayam_Resume.doc" className="btn" download>
          Download Resume
        </a>
      </section>

      <section id="about" className="section">
        <h3>About</h3>
        <p>
          Integration Architect and AI Engineer with 11+ years of experience
          designing enterprise middleware, API-led connectivity, and cloud-native
          platforms. Currently working at HTC Global Services on in-house AI and
          GenAI initiatives.
        </p>
      </section>

      <section id="experience" className="section">
        <h3>Experience</h3>
        <ul>
          <li><strong>HTC Global Services</strong> — Integration Architect & AI Engineer (2024 – Present)</li>
          <li><strong>Wipro</strong> — Technical Lead (2023 – 2024)</li>
          <li><strong>Earlier Roles</strong> — Senior Integration Engineer</li>
        </ul>
      </section>

      <section id="skills" className="section">
        <h3>Skills</h3>
        <p>
          AI & GenAI, MuleSoft, IBM ACE/IIB, Kafka, Python, Java,
          Azure, AWS, Docker, Kubernetes
        </p>
      </section>

      <section id="projects" className="section">
        <h3>Projects</h3>
        <ul>
          <li>GenAI-based Microsoft Teams MoM Generator</li>
          <li>AI Agile Metrics Chatbot</li>
          <li>Enterprise RAG Knowledge Assistant</li>
          <li>AIOps Log Analysis & Automation</li>
        </ul>
      </section>

    </main>
  );
}
