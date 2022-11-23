import styled from "styled-components";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 20px 0px;
  top: 0px;
  background-color: inherit;
  @media screen and (max-width: 400px) {
  }
  z-index: 999;
`;
interface IBlackBox {
  changebox: boolean;
}
const BlackBox = styled(motion.div)<IBlackBox>`
  background-color: #121212 !important;
  width: ${(props) => (props.changebox ? "380px" : "330px")};
  height: ${(props) => (props.changebox ? "200px" : "40px")};
  border-radius: ${(props) => (props.changebox ? "50px" : "24px")};
  transition: 0.5s ease-in-out;
  position: absolute;
  @media screen and (max-width: 400px) {
    width: ${(props) => (props.changebox ? "360px" : "230px")};
    height: ${(props) => (props.changebox ? "200px" : "40px")};
    border-radius: ${(props) => (props.changebox ? "50px" : "24px")};
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px 4px;
  justify-content: center;
  top: 20px;
  color: white;
`;
const ItemBox = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  align-items: center;
  border-radius: 46px;
  flex-direction: column;
  justify-content: center;
`;

const FirstBox = styled.div<IBlackBox>`
  width: 100%;
  height: ${(props) => (props.changebox ? "40%" : "100%")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.changebox ? "center" : "space-between")};
`;
const FirstBoxPhoto = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FirstBoxDes = styled(motion.div)`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const FirstDes = styled.div`
  font-size: 2rem;
  margin-bottom: 2px;
`;
const SecondDes = styled.div`
  color: rgba(255, 255, 255, 0.6);
`;
const FirstBoxfrequency = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17%;
  height: 100%;
`;

const Frequency = styled(motion.div)`
  width: 2px;
  height: 4px;
  background-color: white;
  margin-right: 1px;
`;
const SecondBox = styled(motion.div)`
  margin-top: 10px;
  width: 100%;
  height: 40%;
`;
const Progress = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.6);
`;
const TimeProgress = styled.div`
  width: 50%;
  height: 31%;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.4);
`;
interface ITime {
  time: number;
}
const NowTimeProgress = styled.div<ITime>`
  width: ${(props) =>
    props.time === 1
      ? "25%"
      : props.time === 2
      ? "50%"
      : props.time === 3
      ? "75%"
      : "100%"};
  height: 100%;
  background-color: white;
  border-radius: 25px;
  transition: 0.3s ease-in-out;
`;
const ForwardBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 2.6rem;
  z-index: 40;
  div {
  }
`;
const NotExists = styled.div`
  width: 30%;
  height: 100%;
`;

const ArrowBox = styled.div`
  width: 40%;
  display: flex;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
interface IhiddenVar {
  changeBox: boolean;
}
const hiddenVar = {
  initial: (changeBox: IhiddenVar) => ({
    scale: changeBox ? 0 : 1,
    opacity: changeBox ? 0 : 1,
    transition: { duration: "0.3" },
  }),
  animate: (changeBox: IhiddenVar) => ({
    scale: changeBox ? 1 : 0,
    opacity: changeBox ? 1 : 0,
    transition: { duration: "0.3" },
  }),
  exit: (changeBox: IhiddenVar) => ({
    scale: changeBox ? 0 : 1,
    opacity: changeBox ? 0 : 1,
    transition: { duration: "0.3" },
  }),
};
const rodVar = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: [1, 1.2, 4.3, 2.3, 1.6, 1.2, 0.6, 0],
    transition: { repeat: Infinity, duration: "0.6" },
  },
};
const rodVar2 = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: [1, 1.2, 1.4, 1.6, 1.4, 1.2, 1, 0.8, 0.6],
    transition: { repeat: Infinity, duration: "0.8" },
  },
};
const rodVar3 = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: [1, 1.2, 1.4, 1.2, 1, 0.8, 0.6, 0.5, 0.4, 0.3, 0.2, 0],
    transition: { repeat: Infinity, duration: "0.9" },
  },
};
const rodVar4 = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: [1, 1, 0.8, 0.6, 0.5, 0.4, 0.3, 0.2, 0],
    transition: { repeat: Infinity, duration: "1" },
  },
};
const rodVar5 = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: [1, 1.1, 1.2, 1.1, 1, 0.9, 0.8, 0.7],
    transition: { repeat: Infinity, duration: "1" },
  },
};
const rodVar6 = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: [1, 0.9, 0.8, 0.7, 0.8],
    transition: { repeat: Infinity, duration: "1" },
  },
};
const Dynamic = () => {
  const [changeBox, setChangeBox] = useState(false);

  const [next, setNext] = useState(1);
  const [previous, setPrevious] = useState(next);
  const scaleY = useSpring(0);
  const input = [0];
  const output = [1];

  return (
    <Wrapper>
      <BlackBox changebox={changeBox}>
        <ItemBox>
          <FirstBox changebox={changeBox}>
            <FirstBoxPhoto onClick={() => setChangeBox((prev) => !prev)}>
              photo
            </FirstBoxPhoto>
            <AnimatePresence>
              {changeBox && (
                <FirstBoxDes
                  custom={changeBox}
                  variants={hiddenVar}
                  initial="initial"
                  animate="animate"
                >
                  <FirstDes>Home</FirstDes>
                  <SecondDes>by Limyira</SecondDes>
                </FirstBoxDes>
              )}
            </AnimatePresence>

            <FirstBoxfrequency onClick={() => setChangeBox((prev) => !prev)}>
              <Frequency
                variants={rodVar}
                initial="initial"
                animate="animate"
              />

              <Frequency
                variants={rodVar3}
                initial="initial"
                animate="animate"
                style={{ height: "10px" }}
              />
              <Frequency
                variants={rodVar4}
                initial="initial"
                animate="animate"
                style={{ height: "16px" }}
              />
              <Frequency
                variants={rodVar5}
                initial="initial"
                animate="animate"
                style={{ height: "14px" }}
              />
              <Frequency
                variants={rodVar6}
                initial="initial"
                animate="animate"
                style={{ height: "24px" }}
              />
              <Frequency
                variants={rodVar6}
                initial="initial"
                animate="animate"
                style={{ height: "18px" }}
              />
              <Frequency
                variants={rodVar2}
                initial="initial"
                animate="animate"
                style={{ height: "16px" }}
              />
            </FirstBoxfrequency>
          </FirstBox>
          <AnimatePresence>
            {changeBox && (
              <SecondBox
                custom={changeBox}
                variants={hiddenVar}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Progress onClick={() => setChangeBox((prev) => !prev)}>
                  <div>{next}</div>
                  <TimeProgress>
                    <NowTimeProgress time={next} />
                  </TimeProgress>
                  <div>4</div>
                </Progress>
                <ForwardBox>
                  <NotExists onClick={() => setChangeBox((prev) => !prev)} />
                  <ArrowBox>
                    <div
                      onClick={() => {
                        if (next !== 1) {
                          setNext((prev) => prev - 1);
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faCaretLeft} />
                    </div>
                    <div
                      onClick={() => {
                        if (next !== 4) {
                          setNext((prev) => prev + 1);
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faCaretRight} />
                    </div>
                  </ArrowBox>
                  <NotExists onClick={() => setChangeBox((prev) => !prev)} />
                </ForwardBox>
              </SecondBox>
            )}
          </AnimatePresence>
        </ItemBox>
      </BlackBox>
    </Wrapper>
  );
};

export default Dynamic;
