import "../styles/navbar.css";
import Navigation from "./Navigation";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="navigation">
      <Navigation />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
