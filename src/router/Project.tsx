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
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
`;
const Board = styled.div`
  width: 60%;
  height: 100%;
  background-color: red;
`;
const Project = () => {
  return (
    <Container>
      <BoardWrapper>
        <Board>
          <Card />
        </Board>
      </BoardWrapper>
    </Container>
  );
};

export default Project;
