import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
const MobileNavbar = () => {
  const [open, setNavbar] = useState(false);
  const hamIcon = (
    <GiHamburgerMenu className="hamburger" onClick={() => setNavbar(!open)} />
  );
  const closeIcon = (
    <FaWindowClose className="hamburger" onClick={() => setNavbar(!open)} />
  );
  return (
    <div className="mobile-nav">
      {!open ? hamIcon : closeIcon}
      <nav className="navbar">{open && <NavLinks />}</nav>
    </div>
  );
};

export default MobileNavbar;
