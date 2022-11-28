import styled from "styled-components";
import { motion } from "framer-motion";
import MovingSpan from "../components/MovingSpan";
const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: green;
  z-index: 4;
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
const Resume = () => {
  return (
    <Container>
      <InnerContainer>
        <MovingSpan />
      </InnerContainer>
    </Container>
  );
};

export default Resume;
