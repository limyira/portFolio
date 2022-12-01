import React, { useEffect, useRef, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import styled, { ThemeProvider } from "styled-components";
import Dynamic from "./components/Dynamic";
import Home from "./router/Home";
import Project from "./router/Project";
import { useScroll, useTransform } from "framer-motion";
import Router from "./Router";
import { useRecoilState, useRecoilValue } from "recoil";
import { HeightState, pageNumber, ThemeState, YState } from "./atom";
import Resume from "./router/Resume";
import Footer from "./router/Footer";
import { lightTheme, darkTheme } from "./theme";
import Face from "./images/face";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  height: 400vh;
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
  const isDark = useRecoilValue(ThemeState);
  const [offsetY, setOffsetY] = useRecoilState(YState);
  const { scrollY } = useScroll();
  const [innerHeight, setInneHeight] = useRecoilState(HeightState);
  const [page, setPage] = useRecoilState(pageNumber);
  const clickHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    setInneHeight(window.innerHeight);
    scrollY.onChange(() => {
      setOffsetY(scrollY.get());
    });
    window.onbeforeunload = () => {
      setPage(1);
      window.scrollTo(0, 0);
    };
  }, [scrollY]);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Wrapper>
        <FaceBox onClick={clickHome}>
          <Face />
        </FaceBox>
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
