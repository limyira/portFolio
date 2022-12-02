import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const Carousel = styled(motion.div)`
  cursor: grab;
  background-color: inherit;
  padding: 40px;
  overflow: hidden;
`;

const InnerCarousel = styled(motion.div)`
  display: flex;
`;

const Item = styled(motion.div)`
  min-height: 35rem;
  min-width: 20rem;

  position: relative;
  margin-right: 20px;
  @media screen and (min-width: 390px) and (max-width: 700px) {
    min-height: 25rem;
    min-width: 10rem;
  }
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
  height: 100%;
  background-color: black;
  border-radius: 2rem;
  color: white;
  background-image: url("https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-size: cover;
`;

const LinkBox = styled.div`
  width: 100%;
  height: 20%;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.6);
  background-color: ${(props) => props.theme.bgBoard};
`;

const LeftLink = styled.div`
  width: 50%;
  height: 100%;
  border-bottom-left-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  border-right: 1px solid rgba(0, 0, 0, 0.6);

  :hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const RightLink = styled.div`
  width: 50%;
  height: 100%;
  border-bottom-right-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  :hover {
    color: ${(props) => props.theme.accentColor};
  }
`;
const Front = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Back = styled(motion.div)`
  background-color: ${(props) => props.theme.bgBoard};
  color: ${(props) => props.theme.textColor};
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotateY(180deg);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const InnerBack = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;
const SkillBox = styled.div`
  width: 100%;
  height: 20%;
  padding: 1rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.bgBoard};
`;

const Des = styled.div`
  width: 100%;
  height: 80%;
  background-color: ${(props) => props.theme.bgBoard};
`;
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
                <Image />
              </Front>
              <Back>
                <InnerBack>
                  <SkillBox>스킬이 들어갈공간입니다.</SkillBox>
                  <Des>dotaeng joa.</Des>
                </InnerBack>
                <LinkBox>
                  <LeftLink onClick={() => console.log("left")}>
                    Github
                  </LeftLink>
                  <RightLink onClick={() => console.log("right")}>
                    Homepage
                  </RightLink>
                </LinkBox>
              </Back>
            </ItemCard>
          </Item>
        ))}
      </InnerCarousel>
    </Carousel>
  );
};

export default Card;
