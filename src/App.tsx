import React, { useEffect, useRef, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import styled, { ThemeProvider } from "styled-components";
import Dynamic from "./components/Dynamic";
import Home from "./router/Home";
import Project from "./router/Project";
import { useScroll, useTransform } from "framer-motion";
import Router from "./Router";
import { useRecoilState, useRecoilValue } from "recoil";
import { ThemeState, YState } from "./atom";
import Resume from "./router/Resume";
import Footer from "./router/Footer";
import { lightTheme, darkTheme } from "./theme";
import Face from "./images/face";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  height: 600vh;
  width: 100%;
  position: relative;
`;
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
function App() {
  const { scrollY } = useScroll();
  const isDark = useRecoilValue(ThemeState);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Wrapper>
        <FaceBox>
          <Face />
        </FaceBox>
        <ThemeBtn />
        <Router />
        <Project />
        <Resume />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
