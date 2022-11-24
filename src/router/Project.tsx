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
  height: 955px;
  background-color: yellow;
  z-index: 3;
  position: sticky;
  top: 0px;
`;
// const slideVar = {
//   initial: (Y: IContainer) => ({
//     top: "500px",
//   }),
//   animate: (Y: IContainer) => ({
//     top: `500 - ${Y}`,
//   }),
// };
const Project = () => {
  const Y = useRecoilValue(YState);
  const clientHeight = useRecoilValue(BoxHeight);
  const changeHeight = clientHeight - Y + 1;
  useEffect(() => {}, [Y]);
  console.log(changeHeight);
  return (
    <Container
    // custom={Y}
    // variants={slideVar}
    // initial="initial"
    // animate="animate"
    >
      Project
    </Container>
  );
};

export default Project;
