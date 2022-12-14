import styled from "styled-components";
import { motion } from "framer-motion";
import MovingSpan from "../components/MovingSpan";
import Skill from "../components/Skill";
const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  z-index: 3;
  background-color: ${(props) => props.theme.bgColor3};
  position: sticky;
  top: 0px;
  @media screen and (max-width: 480px) {
    height: 270vh;
  }
`;
const InnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    height: 260vh;
  }
`;

const H1 = styled.div`
  width: 100%;
  padding: 50px;
  font-size: 2.3rem;
  color: ${(props) => props.theme.bgTitle2};
`;
const Resume = () => {
  return (
    <Container>
      <InnerContainer>
        <H1>
          <h1>
            {"<"}Skill{"/>"}
          </h1>
        </H1>
        <Skill />
      </InnerContainer>
    </Container>
  );
};

export default Resume;
