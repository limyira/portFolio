import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { BoxHeight, YState } from "../atom";
import { motion } from "framer-motion";
import { useEffect } from "react";
interface IContainer {
  changeHeight: number;
}
const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: yellow;
  z-index: 2;
  top: 100vh;
`;
const slideVar = {
  initial: (changeHeight: IContainer) => ({
    top: "955px",
  }),
  animate: (changeHeight: IContainer) => ({
    top: changeHeight,
  }),
};
const Project = () => {
  const Y = useRecoilValue(YState);
  const clientHeight = useRecoilValue(BoxHeight);
  const changeHeight = clientHeight - Y + 1;
  useEffect(() => {}, [Y]);
  return (
    <Container
    //   custom={changeHeight}
    //   variants={slideVar}
    //   initial="initial"
    //   animate="animate"
    >
      Project
    </Container>
  );
};

export default Project;
