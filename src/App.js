import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./component/HomeScreen";
import ArticlesScreen from "./component/ArticlesScreen";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      <Routes>
        <Route path="/article" element={<ArticlesScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
