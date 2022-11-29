import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

const InnerCarousel = styled(motion.div)`
  display: flex;
  background-color: lightblue;
`;

const Item = styled(motion.div)`
  min-height: 30rem;
  min-width: 30rem;
  padding: 40px;
  border-radius: 2rem;
  background-color: white;
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
          <Item>Hello</Item>
        ))}
      </InnerCarousel>
    </Carousel>
  );
};

export default Card;
