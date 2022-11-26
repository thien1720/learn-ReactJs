import { Link } from "react-router-dom"

function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            About
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">contact</Link>

        </nav>
      </>
    );
  }

export default About