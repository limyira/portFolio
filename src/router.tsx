import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Project from "./router/Project";
import Resume from "./router/Resume";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
