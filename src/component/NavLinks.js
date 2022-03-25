import "../styles/navbar.css";
import { Link } from "react-router-dom";
const NavLinks = () => {
  return (
    <ul className="nav-list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/courses">Our Courses</Link>
      </li>
      <li>
        <Link to="/chipions">Chipions</Link>
      </li>
      <li>
        <Link to="/articles">Our Articles</Link>
      </li>
      <li>
        <Link to="/committes">Committes</Link>
      </li>
      <li>
        <Link to="/aboutUs">About Us</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
