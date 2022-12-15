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
  @media screen and (max-width: 379px) {
    height: 290vh;
  }
  @media screen and (min-width: 380px) and (max-width: 480px) {
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
  @media screen and (max-width: 379px) {
    height: 290vh;
  }
  @media screen and (min-width: 380px) and (max-width: 480px) {
    height: 270vh;
  }
`;

const H1 = styled.div`
  width: 100%;
  padding: 50px;
  font-size: 2.3rem;
  color: ${(props) => props.theme.bgTitle2};
  @media screen and (max-width: 379px) {
    padding: 0;
    margin-top: 70px;
    margin-bottom: 120px;
  }
  @media screen and (min-width: 380px) and (max-width: 480px) {
    padding: 0;
    margin-top: 80px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    padding: 0px;
    margin-top: 160px;
  }
  @media screen and (min-width: 851px) and (max-width: 1400px) {
    height: 60px;
    margin-top: 60px;
    padding: 0px;
    margin-left: 400px;
  }
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
