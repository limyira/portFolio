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
  background-color: ${(props) => props.theme.bgColor2};
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BoardWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const Board = styled.div`
  width: 70%;
  height: fit-content;
`;
const H1 = styled.div`
  width: 120px;
  text-align: center;
  font-size: 2.3rem;
  margin-left: 24px;
  h1 {
    color: rgba(255, 0, 0, 0.6);
    font-weight: 600;
  }
`;
const Project = () => {
  return (
    <Container>
      <BoardWrapper>
        <Board>
          <H1>
            <h1>Project</h1>
          </H1>
          <Card />
        </Board>
      </BoardWrapper>
    </Container>
  );
};

export default Project;
