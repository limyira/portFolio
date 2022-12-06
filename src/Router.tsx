import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./router/Footer";
import Home from "./router/Home";
import Project from "./router/Project";
import Resume from "./router/Resume";
import Dynamic from "./components/Dynamic";
import styled from "styled-components";
import Face from "./public/face";

const FaceBox = styled.div`
  position: fixed;
  left: 10%;

  width: 20px;
  height: 20px;
  z-index: 999;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Router = () => {
  const nav = useNavigate();
  return (
    <BrowserRouter>
      <FaceBox>
        <Face />
      </FaceBox>
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
