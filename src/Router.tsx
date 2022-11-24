import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./router/Footer";
import Home from "./router/Home";
import Project from "./router/Project";
import Resume from "./router/Resume";
import Dynamic from "./components/Dynamic";
const Router = () => {
  return (
    <BrowserRouter>
      <Dynamic />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
