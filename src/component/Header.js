import "../styles/header.css";
const Header = ({ name }) => {
  return (
    <div className="header-contanier">
      <h1>{name}</h1>
    </div>
  );
};

export default Header;
