import React from "react";
import ThemeBtn from "./components/ThemeBtn";
import styled from "styled-components";
import Dynamic from "./components/Dynamic";
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const MainDiv = styled.div`
  width: 100%;
  height: 500%;
  position: relative;
  padding: 20px;
  @media screen and (max-width: 400px) {
    padding: 0px 20px;
  }
`;

function App() {
  return (
    <Wrapper>
      <MainDiv>
        <ThemeBtn />
        <Dynamic />
      </MainDiv>
    </Wrapper>
  );
}

export default App;
