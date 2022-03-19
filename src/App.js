import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./component/HomeScreen";
import AllCourses from "./component/AllCourses";
import CourseDetails from "./component/CourseDetails";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="courses/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
