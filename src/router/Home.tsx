import { useEffect, useRef } from "react";
import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { BoxHeight } from "../atom";
import SVGComponent from "../images/SVGComponent";
import ReactSvg from "../images/Reactsvg";
import Images1 from "../images/images1";
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
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const H1Box = styled.div`
  width: 100%;
  height: 60%;
  padding: 40px 0px;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 400px) {
    height: 60%;
  }
`;
const InnerBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  height: 80%;
  flex-direction: column;
`;
const TagBox = styled.div`
  width: 50%;
  height: 12%;
  background-color: ${(props) => props.theme.consoleBgColor};
  @media screen and (max-width: 400px) {
    width: 90%;
    font-size: 0.8rem;
  }
  @media screen and (min-width: 401px) and (max-width: 1200px) {
    width: 70%;
    font-size: 0.9rem;
  }
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border-bottom: 2px solid ${(props) => props.theme.tagBorder};
  padding: 6px 0px;
  span {
    margin-left: 6px;
    color: ${(props) => props.theme.tagColor};
  }
`;
const Pwd = styled.div`
  width: 50%;
  height: 10%;
  background-color: ${(props) => props.theme.consoleBgColor};
  color: ${(props) => props.theme.remarkColor};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  display: flex;
  align-items: center;
  box-shadow: 3px 10px -27px -8px black;
  padding: 2px;
  span {
    margin-left: 6px;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    font-size: 0.7rem;
  }
  @media screen and (min-width: 401px) and (max-width: 1200px) {
    width: 70%;
    font-size: 0.9rem;
  }
`;
const H1InnerBox = styled.div`
  width: 96%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.consoleBgColor};
  margin: 0 auto;
  @media screen and (max-width: 400px) {
    width: 100%;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 401px) and (max-width: 1200px) {
    width: 90%;
  }
`;
const H1 = styled.h1`
  font-size: 2.3rem;
  margin-bottom: 15px;
  color: ${(props) => props.theme.textColor};
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 401px) and (max-width: 1200px) {
    width: 70%;
    font-size: 1.8rem;
  }
`;
const Span = styled.span`
  color: ${(props) => props.theme.consoleAcColor};
`;
const Span2 = styled.span`
  color: ${(props) => props.theme.consoleACColor2};
`;
const Des = styled.p`
  color: ${(props) => props.theme.remarkColor};
  margin-bottom: 3px;
  @media screen and (max-width: 400px) {
    font-size: 0.5rem;
  }
  @media screen and (min-width: 401px) and (max-width: 1200px) {
    font-size: 0.8rem;
  }
`;
const ImagesBox = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://mattfarley.ca/img/hero-devices.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (max-width: 400px) {
    height: 40%;
  }
  @media screen and (min-width: 401px) and (max-width: 1200px) {
    height: 30%;
  }
`;
const H1InnerBoxWrapper = styled.div`
  width: 50%;
  height: fit-content;
  background-color: ${(props) => props.theme.consoleBgColor};
  display: flex;
  color: ${(props) => props.theme.remarkColor};
  padding: 6px;
  @media screen and (max-width: 400px) {
    font-size: 0.5rem;
    width: 90%;
    height: 42%;
  }
  @media screen and (min-width: 401px) and (max-width: 1200px) {
    font-size: 0.8rem;
    width: 70%;
    height: 62%;
  }
`;
const NumberBox = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  span {
    margin-bottom: 2px;
  }
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
          <InnerBoxWrapper>
            <TagBox>
              <Tag>
                <ReactSvg width="20px" height="20px" />
                <span>Home.tsx</span>
              </Tag>
            </TagBox>
            <Pwd>
              <span>
                src{" > "}router{" > "}
              </span>
              <ReactSvg width="10px" height="10px" />
              <span>Home.tsx</span>
            </Pwd>
            <H1InnerBoxWrapper>
              <NumberBox>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
              </NumberBox>
              <H1InnerBox>
                <H1>
                  Console.<Span>log</Span>(<Span2>"Hello Developer Yira"</Span2>
                  )
                </H1>
                <Des>
                  //조금씩 오류를 수정하면서 나아가는 개발자 임이라입니다.//
                </Des>
                <Des>
                  //조금씩 오류를 수정하면서 나아가는 개발자 임이라입니다.//
                </Des>
                <Des>
                  //조금씩 오류를 수정하면서 나아가는 개발자 임이라입니다.//
                </Des>
              </H1InnerBox>
            </H1InnerBoxWrapper>
          </InnerBoxWrapper>
        </H1Box>
        <ImagesBox></ImagesBox>
      </InnerContainer>
    </Container>
  );
};

export default Home;
