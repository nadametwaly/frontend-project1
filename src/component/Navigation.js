import Logo from "./Logo";
import "../styles/navbar.css";
import NavLinks from "./NavLinks";
const Navigation = () => {
  return (
    <div className="navigat">
      <div className="brand">
        <Logo />
      </div>
      <nav className="navbar">
        <NavLinks />
      </nav>
    </div>
  );
};

export default Navigation;
/*<div className="nav-mobile">
          <a id="nav-toggle" href="#!">
            <span></span>
          </a>
        </div>*/
