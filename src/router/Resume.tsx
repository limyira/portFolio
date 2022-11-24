import styled from "styled-components";
import { motion } from "framer-motion";
const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: green;
  z-index: 4;
  position: sticky;
  top: 0px;
`;
const Resume = () => {
  return <Container>resume</Container>;
};

export default Resume;
