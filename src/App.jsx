import { Routes, Route } from "react-router-dom";
import Hero from "./Components/HeroSection/Hero";
import Settings from "./Components/pages/Settings";
import Profile from "./Components/pages/Profile";
import Projects from "./Components/pages/Projects"
import Courses from "./Components/pages/Courses"
import Friends from "./Components/pages/Friends"
import Files from "./Components/pages/Files"
import Plans from "./Components/pages/Plans"

const App = () => {
  
  return (

    <div className="flex">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/files" element={<Files />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
      
    </div>
  );
};

export default App;
