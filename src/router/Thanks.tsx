import styled from "styled-components";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { YState } from "../atom";
import { useEffect, useState } from "react";

const Container = styled(motion.div)`
  width: 100%;
  height: 500vh;
  z-index: 4;
  background-color: rgb(83, 88, 81);
  position: absolute;
  top: 0px;
  z-index: 52;
  @media screen and (max-width: 379px) {
    height: 610vh;
  }
  @media screen and (min-width: 380px) and (max-width: 480px) {
    height: 590vh;
  }
  @media screen and (min-width: 851px) and (max-width: 1400px) {
    height: 520vh;
  }
`;
const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const TextBox = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 18%;
  }
`;
const Text = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const overVar = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Thanks = () => {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  const y = useRecoilState(YState);
  useEffect(() => {
    scrollY.onChange(() => {
      if (window.innerWidth < 380) {
        if (scrollY.get() >= window.innerHeight * 5.1) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
      if (window.innerWidth < 500 && window.innerWidth >= 380) {
        if (scrollY.get() >= window.innerHeight * 4.8) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
      if (window.innerWidth >= 501 && window.innerWidth < 8000) {
        if (scrollY.get() >= window.innerHeight * 3.5) {
          setShow(true);
        } else {
          setShow(false);
        }
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
          <InnerContainer>
            <TextBox>
              <Text>Thank You For Watching PortFolio</Text>
            </TextBox>
          </InnerContainer>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Thanks;
