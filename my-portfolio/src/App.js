import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, AboutMe, MyProjects } from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/about" element={About} />
        <Route path="/about/aboutme" element={AboutMe} />
        <Route path="/about/myprojects" element={MyProjects} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
