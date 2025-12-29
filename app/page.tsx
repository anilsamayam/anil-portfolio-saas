
import Chatbot from '../components/Chatbot'

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <img src="/images/hero.jpg" className="hero-img" />
        <h1>Anil Samayam</h1>
        <h2>AI Engineer & Integration Architect</h2>
        <p>
          Building enterprise-scale integration platforms and AI-driven solutions.
        </p>
        <a href="/resume/Anil_Samayam_Resume.doc" className="btn" download>
          Download Resume
        </a>
      </section>

      <section className="about">
        <img src="/images/profile.jpg" className="profile-img" />
        <div>
          <h3>About Me</h3>
          <p>
            Integration Architect and AI Engineer with 11+ years of experience
            across enterprise middleware, cloud platforms, and GenAI solutions.
          </p>
        </div>
      </section>

      <section className="chat">
        <h3>Ask About My Experience</h3>
        <Chatbot />
      </section>
    </main>
  )
}
