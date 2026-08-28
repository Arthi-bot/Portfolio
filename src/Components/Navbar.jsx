import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();

  const goToSection = (section, url) => {
    navigate(url);

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

      // NEW: State to control mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // NEW: Toggle menu
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // NEW: Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

    return(
        <>
        <nav className="nav">
          <a onClick={() => {goToSection("home", "/");}} className="logo" aria-label="Alex Morgan home">
            <span className="logo-mark">&lt;/&gt;</span>
            Arthi Margam
          </a>

          {/* CHANGED: Added dynamic "open" class */}
          <ul
            className={`nav-links ${isMenuOpen ? "open" : ""}`}
            id="navLinks"
          >
            {/* CHANGED: Added onClick */}
            <li onClick={() => {goToSection("project", "/project"); handleLinkClick();}}>Project
        </li>

        <li onClick={() => {goToSection("about", "/about"); handleLinkClick();}}>About me
        </li>

        <li onClick={() => {goToSection("contact", "/contact"); handleLinkClick();}}>Let's talk
        </li>
          </ul>

          <div className="availability">
            <span className="pulse"></span>
            Available for work
          </div>

          {/* CHANGED: Added onClick and dynamic aria-expanded */}
          <button
            className="menu-button"
            id="menuButton"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={handleMenuClick}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </nav>
        </>
    )
}

export default Navbar