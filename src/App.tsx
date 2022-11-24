import React, { useEffect, useRef, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import styled from "styled-components";
import Dynamic from "./components/Dynamic";
import Home from "./router/Home";
import Project from "./router/Project";
import { useScroll, useTransform } from "framer-motion";
import Router from "./router";
import { useRecoilState } from "recoil";
import { YState } from "./atom";
import Resume from "./router/Resume";
import Footer from "./router/Footer";
const Wrapper = styled.div`
  height: 400vh;
  width: 100%;
  position: relative;
`;

function App() {
  const { scrollY } = useScroll();
  const [Y, SetY] = useRecoilState(YState);
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get()) {
        SetY(scrollY.get());
      }
    });
  }, [scrollY]);
  return (
    <Wrapper>
      <Dynamic />
      <ThemeBtn />
      <Home />
      <Project />
      <Resume />
      <Footer />
    </Wrapper>
  );
}

export default App;