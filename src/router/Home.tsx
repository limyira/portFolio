import { useEffect, useRef } from "react";
import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { BoxHeight } from "../atom";
const Container = styled.div`
  width: 100%;
  position: sticky;
  height: 955px;
  background-color: red;
  z-index: 1;
  top: 0px;
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
