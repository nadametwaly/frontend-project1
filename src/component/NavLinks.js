import "../styles/navbar.css";
import { Link } from "react-router-dom";
const NavLinks = () => {
  return (
    <ul className="nav-list">
      <li>
        <Link to="/courses">Our Courses</Link>
      </li>
      <li>
        <Link to="/chipions">Chipions</Link>
      </li>
      <li>
        <Link to="/article">Our Article</Link>
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
