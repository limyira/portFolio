import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../atom";

const Btn = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  left: 8000px;
  top: 20px;
  @media screen and (max-width: 400px) {
    width: 76px;
    height: 40px;
    top: 750px;
  }
`;
const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 400px) {
    width: 40px;
    height: 40px;
  }
`;

interface IBgnColor {
  bgcolor: boolean;
}
const BgColor = styled.div<IBgnColor>`
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) =>
    props.bgcolor ? "rgba(58, 227, 116, 1)" : "rgb(221, 221, 221)"};
  display: flex;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  transition: 0.5s ease-in-out;
  @media screen and (max-width: 400px) {
    width: 76px;
    height: 40px;
    border-radius: 18px;
  }
`;

const MCircle = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  @media screen and (max-width: 400px) {
    width: 32px;
    height: 32px;
  }
`;
const ThemeBtn = () => {
  const [dark, setDark] = useRecoilState(ThemeState);
  return (
    <>
      <Btn>
        <BgColor bgcolor={dark}>
          <Circle>
            {!dark && (
              <MCircle layoutId="moving" onClick={() => setDark(true)} />
            )}
          </Circle>
          <Circle>
            {dark && (
              <MCircle layoutId="moving" onClick={() => setDark(false)} />
            )}
          </Circle>
        </BgColor>
      </Btn>
    </>
  );
};

export default ThemeBtn;
