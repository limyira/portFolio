import { useEffect, useRef } from "react";
import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { BoxHeight } from "../atom";
import SVGComponent from "../images/SVGComponent";
const Container = styled.div`
  width: 100%;
  position: sticky;
  height: 100vh;
  background-color: white;
  z-index: 1;
  top: 0px;
`;
const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgColor1};
`;
const H1Box = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 40px 0px;
`;
const H1InnerBox = styled.div`
  width: 100%;
  height: 50%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const H1 = styled.h1`
  background-color: yellow;
`;
const Des = styled.p`
  background-color: green;
`;
const ImagesBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const [boxHeight, setBoxHeight] = useRecoilState(BoxHeight);
  useEffect(() => {
    setBoxHeight(homeRef.current?.clientHeight!);
  }, []);
  return (
    <Container ref={homeRef}>
      <InnerContainer>
        <H1Box>
          <H1InnerBox>
            <H1>Hello my name is Limyira</H1>
            <Des>iwantto to go home</Des>
          </H1InnerBox>
        </H1Box>
        <ImagesBox>
          <SVGComponent height="900px" width="900px" />
        </ImagesBox>
      </InnerContainer>
    </Container>
  );
};

export default Home;
