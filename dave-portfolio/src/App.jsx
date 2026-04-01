import React from "react";
import "./App.css";
import profile from "./assets/me.png"; // add your image in src folder

function App() {
  return (
    <div className="main">

      <nav className="nav">
        <h2 className="logo">CD.</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">

        <div className="hero-left">
          <h1>
            Christian <br /> Tagadiad
          </h1>
          <div className="line"></div>
          <p className="role">Admin Virtual Assistant</p>
        </div>

        <div className="hero-center">
          <img src={profile} alt="profile" />
        </div>

        <div className="hero-right">
          <p className="intro">Introduction</p>
          <h3>
            Admin VA focused on organization, accuracy, and workflow support.
          </h3>
          <p className="desc">
            I manage operations, support customers, and keep systems clean and
            efficient. I ensure tasks are completed correctly and on time.
          </p>
        </div>

      </section>

      <section className="stats">
        <div>
          <h2>1+</h2>
          <p>Years Learning</p>
        </div>
        <div>
          <h2>10+</h2>
          <p>Projects</p>
        </div>
        <div>
          <h2>100%</h2>
          <p>Accuracy Focus</p>
        </div>
      </section>

      <section id="services">
        <h2 className="section-title">Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Admin Support</h3>
            <p>Inbox management, scheduling, task tracking</p>
            <ul>
              <li>Email handling</li>
              <li>Calendar management</li>
              <li>Data entry</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Content Support</h3>
            <p>Post scheduling and content organization</p>
            <ul>
              <li>Scheduling posts</li>
              <li>Caption formatting</li>
              <li>Platform uploads</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Data Management</h3>
            <p>Organized systems and tracking</p>
            <ul>
              <li>Google Sheets tracking</li>
              <li>Research</li>
              <li>Workflow organization</li>
            </ul>
          </div>

        </div>
      </section>

      <section id="works">
          <h2 className="section-title">Selected Works</h2>

          <div className="works-grid">

            <div className="work-item">
              <div className="overlay">
                <h3>Content Calendar</h3>
                <p>Structured posting system</p>
              </div>
            </div>

            <div className="work-item">
              <div className="overlay">
                <h3>Email Support Samples</h3>
                <p>Customer response templates</p>
              </div>
            </div>

            <div className="work-item">
              <div className="overlay">
                <h3>Data Tracker</h3>
                <p>Organized spreadsheet system</p>
              </div>
            </div>

            <div className="work-item">
              <div className="overlay">
                <h3>Canva Designs</h3>
                <p>Social media visuals</p>
              </div>
            </div>

        </div>
      </section>

      <section id="contact">
        <h2 className="section-title">Let’s Work Together</h2>

          <div className="contact-box">

          <div className="contact-info">
            <p>Email</p>
            <h3>christian.dave.tagadiad01@gmail.com</h3>

            <p>Phone</p>
            <h3>+63 948 422 1967</h3>

            <p>Status</p>
            <h3>Available for VA roles</h3>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>

        </div>
      </section>

    </div>
  );
}

export default App;