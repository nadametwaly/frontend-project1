import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./component/HomeScreen";
import ArticlesScreen from "./component/ArticlesScreen";
import ArticleDetails from "./component/ArticleDetails";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/articles" element={<ArticlesScreen />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
