import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { BoxHeight, YState } from "../atom";
import { motion } from "framer-motion";
import { useEffect } from "react";
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

const Project = () => {
  return <Container>Project</Container>;
};

export default Project;
