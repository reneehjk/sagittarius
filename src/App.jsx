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
          <a className="nav-brand" href="#overview">Group 20</a>

          <div className="nav-links">
            <a href="#overview">Overview</a>
            <a href="#team">Team</a>
            <a href="#a1">Assignment 1</a>
            <a href="#a2">Assignment 2</a>
            <a href="#a3">Assignment 3</a>
            <a href="#resources">External Resources</a>
          </div>
        </div>
      </nav>

      {/* OVERVIEW */}
      <section id="overview" className="section">
        <h1>Group 20</h1>
        <p className="section-text">
          Our project is about...
        </p>
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
        <p className="section-text">
          Coming soon...
        </p>
      </section>
    </div>
  );
}
