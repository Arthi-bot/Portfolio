function Home(){
    return(
        <>
                  <section className="hero">
            <div>
              <div className="eyebrow">Frontend developer</div>

              <h1>
                I build digital
                <br />
                experiences that <em>matter.</em>
              </h1>

              <p className="hero-copy">
                I'm Arthi, a frontend developer based in India. I turn
                ambitious ideas into thoughtful, high-performing websites
                people love to use.
              </p>

              <div className="hero-actions">
                <a href="#work" className="btn btn-primary">
                  View my work
                  <span>↘</span>
                </a>

                <a href="#contact" className="btn btn-secondary">
                  Get in touch <span>→</span>
                </a>
              </div>
            </div>

            <div className="code-card" aria-label="Code preview">
              <div className="card-top">
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>arthi.js</span>
              </div>

              <div className="code">
                <div>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span> = {"{"}
                </div>

                <div className="indent">
                  name: <span className="green">'Arthi Margam'</span>,
                </div>

                <div className="indent">focus: [</div>

                <div className="indent indent">
                  <span className="green">'Frontend Development'</span>,
                </div>

                <div className="indent indent">
                  <span className="green">'Great experiences'</span>
                </div>

                <div className="indent">],</div>

                <div className="indent">
                  coffee: <span className="purple">true</span>
                </div>

                <div>
                  {"}"};
                </div>

                <br />

                <div>
                  <span className="comment">
                    // Let's build something.
                  </span>
                </div>
              </div>
            </div>
          </section>

          <div className="client-row"></div>
        </>
    )
}
export default Home