import "../styles/footer.css";
import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className="flex-rw">
      <div className="brand">
        <Logo />
      </div>
      <div className="footer-list-top">
        <ul className="nav-list">
          <h4 className="footer-list-header">CONNECT WITH US</h4>
          <li>
            <a
              href="/Angels/cat/id/70"
              className="generic-anchor footer-list-anchor"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="/Home-Decor/cat/id/64"
              className="generic-anchor footer-list-anchor"
            >
              Facebook
            </a>
          </li>
        </ul>
        <p>© Copyright 2022 IEEE SSCS</p>
      </div>
    </footer>
  );
};

export default Footer;
