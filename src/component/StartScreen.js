import "../styles/homeScreen.css";
const StartScreen = () => {
  return (
    <div className="home-container">
      <div className="logo-contanier">
        <img src="/images/logo.svg" alt="ieee-logo" />
      </div>
      <form className="form-search">
        <input type="text" />
      </form>
      <div className="text-contanier">
        <div className="mission start-text">
          <h3>OUR MISSION</h3>
          <p>
            Meeting the needs of undergraduate and postgraduate student
            interested in the field of electronics and all of it's related
            topics
          </p>
        </div>
        <div className="vision start-text">
          <h3>OUR VISION</h3>
          <p>
            Creating a community of engineers who are well qualified to play an
            important role in the development of the electronics industry
            worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
