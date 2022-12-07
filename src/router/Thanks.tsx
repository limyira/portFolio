import styled from "styled-components";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { YState } from "../atom";
import { useEffect, useState } from "react";

const Container = styled(motion.div)`
  width: 100%;
  height: 600vh;
  z-index: 4;
  background-color: rgb(83, 88, 81);
  position: absolute;
  top: 0px;
  z-index: 52;
  @media screen and (max-width: 480px) {
    height: 700vh;
  }
`;
const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const overVar = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Thanks = () => {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  const y = useRecoilState(YState);
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() >= window.innerHeight * 3.5) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <Container
          variants={overVar}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <InnerContainer></InnerContainer>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Thanks;
