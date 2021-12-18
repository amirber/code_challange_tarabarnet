import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>کد چلنج</h1>
        </Link>
        <Link className="home" to="/">
        خانه
        </Link>
        <Link className="about-us" to="/about">
        درباره ما
        </Link>
      </nav>
    </div>
  )
}
