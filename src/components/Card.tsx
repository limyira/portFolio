import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const OverFlowBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  width: 340px;
  height: 80%;
  background-color: black;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 25px;
  padding: 10px;
`;
const LBtnBox = styled.div`
  position: absolute;
  background-color: white;
  z-index: 3;
  left: 0;
  top: 50%;
  width: 40px;
  height: 40px;
  font-size: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ProCard = styled(motion.div)`
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

const RBtnBox = styled.div`
  position: absolute;
  background-color: white;
  z-index: 3;
  right: 0;
  width: 40px;
  height: 40px;
  font-size: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Card = () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const offset = 3;
  const [index, setIndex] = useState(1);
  return (
    <OverFlowBox>
      <LBtnBox onClick={() => setIndex((prev) => prev - 1)}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </LBtnBox>
      {array.slice(offset * index, offset * index + offset).map((i) => (
        <Container key={i}>{i}</Container>
      ))}
      <RBtnBox onClick={() => setIndex((prev) => prev + 1)}>
        <FontAwesomeIcon icon={faAngleRight} />
      </RBtnBox>
    </OverFlowBox>
  );
};

export default Card;
