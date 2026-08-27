function Project(){
    return(
        <>
                  <section id="work">
            <div className="section-heading">
              <div>
                <div className="section-tag">Work</div>
                <h2>A few things I've made.</h2>
              </div>
            </div>

            <div className="projects-grid">
              <article className="project">
                <div className="project-visual visual-one">
                  <div className="dashboard">
                    <div className="dash-head">
                      <span>OVERVIEW</span>
                      <span>June 2024 ·⌄</span>
                    </div>

                    <div className="dash-layout">
                      <div className="chart">
                        <svg
                          viewBox="0 0 100 50"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0,44 C11,38 13,35 22,37 S34,19 42,26 S51,28 59,15 S70,22 78,12 S88,17 100,3"
                            fill="none"
                            stroke="#4b978b"
                            strokeWidth="3"
                          />

                          <path
                            d="M0,44 C11,38 13,35 22,37 S34,19 42,26 S51,28 59,15 S70,22 78,12 S88,17 100,3 L100,50 L0,50Z"
                            fill="rgba(75,151,139,.11)"
                          />
                        </svg>
                      </div>

                      <div className="metrics">
                        <div className="metric">
                          <small>Revenue</small>
                          <b>$54.2k</b>
                        </div>

                        <div className="metric">
                          <small>Orders</small>
                          <b>1,284</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <div>
                    <div className="project-label">
                      Web application · 2024
                    </div>
                    <h3>Northstar Analytics</h3>
                  </div>

                  <a
                    href="#contact"
                    className="round-link"
                    aria-label="View Northstar Analytics project"
                  >
                    ↗
                  </a>
                </div>
              </article>

              <article className="project">
                <div className="project-visual visual-two">
                  <div className="phone">
                    <div className="notch"></div>
                    <div className="phone-label">GOOD EVENING</div>

                    <h4>
                      Find your next
                      <br />
                      favorite sound.
                    </h4>

                    <div className="music-cover"></div>
                    <div className="track"></div>

                    <div className="controls">
                      <span>‹‹</span>
                      <span>◉</span>
                      <span>››</span>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <div>
                    <div className="project-label">
                      Mobile experience · 2023
                    </div>
                    <h3>Echo Music</h3>
                  </div>

                  <a
                    href="#contact"
                    className="round-link"
                    aria-label="View Echo Music project"
                  >
                    ↗
                  </a>
                </div>
              </article>
            </div>
          </section>
        </>
    )
}
export default Project