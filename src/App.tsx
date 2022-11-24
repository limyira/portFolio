import React, { useEffect, useRef, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import styled, { ThemeProvider } from "styled-components";
import Dynamic from "./components/Dynamic";
import Home from "./router/Home";
import Project from "./router/Project";
import { useScroll, useTransform } from "framer-motion";
import Router from "./router";
import { useRecoilState, useRecoilValue } from "recoil";
import { ThemeState, YState } from "./atom";
import Resume from "./router/Resume";
import Footer from "./router/Footer";
import { lightTheme, darkTheme } from "./theme";
const Wrapper = styled.div`
  height: 400vh;
  width: 100%;
  position: relative;
`;

function App() {
  const { scrollY } = useScroll();
  const isDark = useRecoilValue(ThemeState);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Wrapper>
        <Dynamic />
        <ThemeBtn />
        <Home />
        <Project />
        <Resume />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
