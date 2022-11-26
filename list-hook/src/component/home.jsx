import { Link } from "react-router-dom"

function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>Trang chủ</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/contact">contact</Link>

        </nav>
      </>
    );
  }

export default Home