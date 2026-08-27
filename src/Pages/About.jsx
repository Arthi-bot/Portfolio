function About(){
    return(
        <>
                  <section className="about" id="about">
            <div className="about-grid">
              <div>
                <div className="section-tag">A little about me</div>
                <h2>Good design is how it works.</h2>
              </div>

              <div className="about-content">
                <p>
                  I'm a passionate Frontend Developer and Freelance Web
                  Developer focused on creating clean, responsive, and
                  user-friendly websites. I work with HTML, CSS, JavaScript,
                  React, and modern frontend technologies to turn ideas and
                  designs into functional web experiences.
                </p>

                <p>
                  As a freelancer, I enjoy working closely with clients to
                  understand their goals and build websites that are both
                  visually appealing and easy to use. I'm always learning and
                  improving my skills to deliver better solutions and create
                  meaningful digital experiences.
                </p>

                <div className="skills">
                  <span className="skill">JavaScript</span>
                  <span className="skill">React.js</span>
                  <span className="skill">CSS & Tailwind CSS</span>
                  <span className="skill">Git/GitHub</span>
                  <span className="skill">Context API</span>
                  <span className="skill">AI-integration</span>
                  <span className="skill">Figma</span>
                </div>
              </div>
            </div>

            <div className="stats" style={{ marginTop: "66px" }}>
              <div className="stat">
                <div className="stat-number">1</div>
                <div className="stat-label">Year of experience</div>
              </div>

              <div className="stat">
                <div className="stat-number">10</div>
                <div className="stat-label">Projects Completed</div>
              </div>

              <div className="stat">
                <div className="stat-number">0</div>
                <div className="stat-label">clients</div>
              </div>

              <div className="stat">
                <div className="stat-number">∞</div>
                <div className="stat-label">Cups of coffee</div>
              </div>
            </div>
          </section>
        </>
    )
}
export default About