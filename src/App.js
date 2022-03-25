import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./component/HomeScreen";
import Footer from "./component/Footer";
import AllCourses from "./component/AllCourses";
import CourseDetails from "./component/CourseDetails"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Courses" element={<AllCourses/>}/>
        <Route path="/Courses/:id" element={<CourseDetails/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
