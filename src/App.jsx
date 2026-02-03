import "./App.css";

import anna from "./assets/anna.jpg";
import nathan from "./assets/nathan.jpg";
import sydney from "./assets/sydney.jpeg";
import teagan from "./assets/teagan.jpg";
import yansheng from "./assets/yansheng.png";
import renee from "./assets/renee.WEBP";

export default function App() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#overview">Sagittarius</a>

          <div className="nav-links">
            <a href="#overview">Overview</a>
            <a href="#a1">Assignment 1</a>
            <a href="#a2">Assignment 2</a>
            <a href="#a3">Assignment 3</a>
            <a href="#resources">External Resources</a>
            <a href="#team">Team</a>
          </div>
        </div>
      </nav>

      {/* OVERVIEW */}
      <section id="overview" className="section">
        <h1>Sagittarius</h1>
        <p className="section-text">
          This project examines the architecture of Gemini CLI, an AI-powered developer tool that brings advanced code analysis and automation directly into the terminal. Our team analyzes both the documented conceptual architecture and the actual source code to identify strengths, limitations, and design gaps. Based on this analysis, we propose and evaluate architectural enhancements, outlining clear implementation steps and alternatives.
        </p>
      </section>

      

      {/* ASSIGNMENTS */}
      <section id="a1" className="section">
        <h2>Assignment 1</h2>
        <p className="section-text">
          Coming soon...
        </p>
      </section>

      <section id="a2" className="section">
        <h2>Assignment 2</h2>
        <p className="section-text">
          Coming soon...
        </p>
      </section>

      <section id="a3" className="section">
        <h2>Assignment 3</h2>
        <p className="section-text">
          Coming soon...
        </p>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="section">
        <h2>External Resources</h2>

        <ul className="section-text resources-list">
          <li>
            <a
              href="https://blog.google/products-and-platforms/products/gemini/gemini-3/#gemini-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gemini 3 Official Announcement – Google
            </a>
          </li>

          <li>
            <a
              href="https://www.ibm.com/think/topics/google-gemini"
              target="_blank"
              rel="noopener noreferrer"
            >
              Overview of Google Gemini – IBM Think
            </a>
          </li>

          <li>
            <a
              href="https://artificialanalysis.ai/models/comparisons/gpt-5-vs-gemini-2-5-pro?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GPT-5 vs Gemini 2.5 Pro – Artificial Analysis
            </a>
          </li>

          <li>
            <a
              href="https://www.pcmag.com/reviews/google-gemini?test_uuid=04IpBmWGZleS0I0J3epvMrC&test_variant=A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Gemini Review – PCMag
            </a>
          </li>

          <li>
            <a
              href="https://arstechnica.com/features/2026/01/has-gemini-surpassed-chatgpt-we-put-the-ai-models-to-the-test/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Has Gemini Surpassed ChatGPT? – Ars Technica
            </a>
          </li>
        </ul>
      </section>


      {/* TEAM */}
      <section id="team" className="section">
        <h2>Team</h2>

        <div className="grid">
          <div className="card">
            <span className="role-tag leader">Leader</span>
            <h2>Renee Kim</h2>
            <img className="avatar" src={renee} alt="Renee Kim" />
          </div>

          <div className="card">
            <span className="role-tag presenter">Presenter</span>
            <h2>Nathan Diniro</h2>
            <img className="avatar" src={nathan} alt="Nathan Diniro" />
          </div>

          <div className="card">
            <span className="role-tag presenter">Presenter</span>
            <h2>Sydney Kinnear</h2>
            <img className="avatar" src={sydney} alt="Sydney Kinnear" />
          </div>

          <div className="card">
            <span className="role-tag member">Member</span>
            <h2>Yansheng Ni</h2>
            <img className="avatar" src={yansheng} alt="Yansheng Ni" />
          </div>

          <div className="card">
            <span className="role-tag member">Member</span>
            <h2>Teagan Wright</h2>
            <img className="avatar" src={teagan} alt="Teagan Wright" />
          </div>

          <div className="card">
            <span className="role-tag member">Member</span>
            <h2>Anna Wu</h2>
            <img className="avatar" src={anna} alt="Anna Wu" />
          </div>
        </div>
      </section>
    </div>
  );
}
