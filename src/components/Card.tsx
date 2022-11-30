import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const Carousel = styled(motion.div)`
  cursor: grab;
  background-color: lightblue;
  padding: 20px;
  overflow: hidden;
`;

const InnerCarousel = styled(motion.div)`
  display: flex;
`;

const Item = styled(motion.div)`
  min-height: 28rem;
  min-width: 20rem;

  position: relative;
  margin-right: 20px;
`;

const ItemCard = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: black;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  transition: all 1s ease-in-out;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  :hover {
    transform: translate(-50%, -50%) rotateY(180deg);
  }
  div {
    backface-visibility: hidden;
  }
`;
const Image = styled.div`
  width: 100;
  height: 80%;
  background-color: black;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  color: white;
  background-image: url("https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-size: cover;
`;

const LinkBox = styled.div`
  width: 100%;
  height: 20%;
  background-color: red;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  display: flex;
`;

const LeftLink = styled.div`
  width: 50%;
  height: 100%;
  background-color: yellow;
  border-bottom-left-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const RightLink = styled.div`
  width: 50%;
  height: 100%;
  background-color: green;
  border-bottom-right-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Front = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Back = styled(motion.div)`
  background-color: beige;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotateY(180deg);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const cardVar = {
//   initial: {
//     y: 0,
//   },
//   animate: {
//     rotateY: 180,
//     transition: { duration: 1.5 },
//   },
// };
const Card = () => {
  const [boardWidth, setBoardWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const array = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    setBoardWidth(
      carousel.current?.scrollWidth! - carousel.current?.offsetWidth!
    );
  });
  return (
    <Carousel ref={carousel}>
      <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -boardWidth }}>
        {array.map((i) => (
          <Item>
            <ItemCard>
              <Front>
                <Image>hello</Image>
                <LinkBox>
                  <LeftLink>Github</LeftLink>
                  <RightLink>Goto Site</RightLink>
                </LinkBox>
              </Front>
              <Back>설명적을공간.</Back>
            </ItemCard>
          </Item>
        ))}
      </InnerCarousel>
    </Carousel>
  );
};

export default Card;
