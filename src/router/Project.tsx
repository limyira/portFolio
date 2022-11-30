import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { BoxHeight, YState } from "../atom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import MovingSpan from "../components/MovingSpan";
import Card from "../components/Card";
interface IContainer {
  Y: number;
}
const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  z-index: 3;
  background-color: white;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
`;

const BoardWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Board = styled.div`
  width: 70%;
  height: fit-content;
`;
const H1Box = styled.div`
  width: 100%;
  height: 30%;
  background-color: red;
`;
const Project = () => {
  return (
    <Container>
      <H1Box>hello</H1Box>
      <BoardWrapper>
        <Board>
          <Card />
        </Board>
      </BoardWrapper>
    </Container>
  );
};

export default Project;
