import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./component/HomeScreen";
import ArticlesScreen from "./component/ArticlesScreen";
import ArticleDetails from "./component/ArticleDetails";
import Footer from "./component/Footer";
import AllCourses from "./component/AllCourses";
import CourseDetails from "./component/CourseDetails";
import AllCommittes from "./component/AllCommittes";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Courses" element={<AllCourses />} />
        <Route path="/Courses/:id" element={<CourseDetails />} />
        <Route path="/articles" element={<ArticlesScreen />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/committes" element={<AllCommittes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
