import "../styles/homeScreen.css";
const HomeScreen = () => {
  return (
    <div className="home-container">
      <div className="logo-contanier">
        <img src="/images/logo.svg" alt="ieee-logo" />
      </div>
      <form className="form-search">
        <input type="text" />
      </form>
      <div className="content-contaniner">
        <div className="vision-container"></div>
      </div>
    </div>
  );
};

export default HomeScreen;
