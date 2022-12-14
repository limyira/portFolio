import React, { useEffect, useRef, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import styled, { ThemeProvider } from "styled-components";
import Dynamic from "./components/Dynamic";
import Home from "./router/Home";
import Project from "./router/Project";
import { useScroll, useTransform } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { HeightState, pageNumber, ThemeState, YState } from "./atom";
import Resume from "./router/Resume";
import Footer from "./router/Footer";
import { lightTheme, darkTheme } from "./theme";
import Thanks from "./router/Thanks";
import Power from "./images/power.png";
const Wrapper = styled.div`
  height: 500vh;
  width: 100%;
  position: relative;
`;
const FaceBox = styled.div`
  position: fixed;
  left: 10%;
  background-image: url(${Power});
  background-repeat: no-repeat;
  background-position: center;
  width: 60px;
  height: 60px;
  z-index: 999;
  top: 30px;
  display: flex;
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
    scrollY.onChange(() => {
      console.log(scrollY.get());
    });
  }, [scrollY]);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Wrapper>
        <FaceBox onClick={clickHome}></FaceBox>
        <Dynamic />
        <ThemeBtn />
        <Home />
        <Footer />

        <Resume />
        <Project />

        <Thanks />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
