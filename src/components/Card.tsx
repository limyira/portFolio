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
  position: relative;
  overflow: hidden;
`;
const Container1 = styled.div`
  width: 340px;
  height: 80%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: green;
  border-radius: 25px;
  padding: 10px;
  position: absolute;
  z-index: 3;
  box-shadow: 14px -5px 35px -21px rgba(0, 0, 0, 0.66);
  left: 35%;
`;
const Container2 = styled.div`
  width: 340px;
  height: 80%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 25px;
  padding: 10px;
  position: absolute;
  left: 45%;
  background-color: yellow;
  z-index: 2;
  scale: 0.9;
  box-shadow: 14px -5px 35px -21px rgba(0, 0, 0, 0.66);
`;
const Container3 = styled.div`
  width: 340px;
  height: 80%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 25px;
  padding: 10px;
  position: absolute;
  background-color: green;
  z-index: 1;
  left: 55%;
  scale: 0.8;
  box-shadow: 14px -5px 35px -21px rgba(0, 0, 0, 0.66);
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

const LayOutBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
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
      <LayOutBox>
        <Container1 />
        <Container2 />
        <Container3 />
      </LayOutBox>
      <RBtnBox onClick={() => setIndex((prev) => prev + 1)}>
        <FontAwesomeIcon icon={faAngleRight} />
      </RBtnBox>
    </OverFlowBox>
  );
};

export default Card;
