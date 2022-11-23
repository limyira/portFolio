import { useEffect, useRef } from "react";
import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { BoxHeight } from "../atom";
const Container = styled.div`
  width: 100%;

  height: 100vh;
  position: fixed;
  background-color: red;
`;

const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const [boxHeight, setBoxHeight] = useRecoilState(BoxHeight);
  useEffect(() => {
    setBoxHeight(homeRef.current?.clientHeight!);
  }, []);
  return <Container ref={homeRef}>hello</Container>;
};

export default Home;
