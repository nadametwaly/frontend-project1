import Logo from "./Logo";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <Logo />
        </div>
        <nav className="navbar">
          <div className="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul className="nav-list">
            <li>
              <a href="/courses">Our Courses</a>
            </li>
            <li>
              <a href="#!">Chipions</a>
            </li>
            <li>
              <a href="#!">Our Article</a>
            </li>
            <li>
              <a href="#!">Committes</a>
            </li>
            <li>
              <a href="#!">About As</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
