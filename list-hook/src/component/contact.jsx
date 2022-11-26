import { Link } from "react-router-dom"

function Contact() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            contact
          </p>
        </main>
        <nav>
          <Link to="/contact">contact</Link>
          <Link to="/about">about</Link>

        </nav>
      </>
    );
  }

export default Contact