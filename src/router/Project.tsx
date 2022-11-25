import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { BoxHeight, YState } from "../atom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import MovingSpan from "../components/MovingSpan";
interface IContainer {
  Y: number;
}
const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: yellow;
  z-index: 3;
  position: sticky;
  top: 0px;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Project = () => {
  return (
    <Container>
      <InnerContainer>
        <MovingSpan />
      </InnerContainer>
    </Container>
  );
};

export default Project;
