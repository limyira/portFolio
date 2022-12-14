import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import CalcMain from "../images/calcMain.png";
import CoinMain from "../images/coinMain.png";
import PortMain from "../images/portMain.png";
import TodoMain from "../images/todoMain.png";
import CarglassMain from "../images/carglassMain.png";

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
  @media screen and (min-width: 340px) and (max-width: 480px) {
    min-height: 25rem;
    min-width: 15rem;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    min-height: 30rem;
    min-width: 20rem;
  }
  @media screen and (min-width: 851px) and (max-width: 1400px) {
    min-height: 32rem;
    min-width: 18rem;
  }
`;

const ItemCard = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 40%;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  transition: all 1s ease-in-out;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -webkit-perspective: 0;
  visibility: visible;
  -webkit-transition: 1s;
  :hover {
    transform: translate(-50%, -50%) rotateY(180deg);
    -webkit-transform: translate(-50%, -50%) rotateY(180deg);
  }

  div {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
`;
const Image = styled.div`
  width: 100;
  height: 100%;
  border-radius: 2rem;
  /* background-image: url(${CalcMain});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat; */
  /* img {
    width: 100%;
    height: 200px;
  } */
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  img {
    width: 100%;
    border-radius: 2rem;

    height: 100%;
  }
`;
const LinkBox = styled.div`
  width: 100%;
  height: 18%;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.6);
  background-color: ${(props) => props.theme.bgBoard};
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
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
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
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
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const InnerBack = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;
const SkillBox = styled.div`
  width: 100%;
  height: 30%;
  padding: 1rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.bgBoard};
`;
const SkillArray = styled.div`
  width: 100%;
  height: 100%;
`;
const SkillItem = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  div {
    display: inline-block;
    height: fit-content;
    padding: 0.4rem;
    min-width: fit-content;
    background-color: #deead9;
    max-width: fit-content;
    border-radius: 0.7rem;
    white-space: nowrap;
    @media screen and (max-width: 480px) {
      font-size: 0.5rem;
    }
    @media screen and (min-width: 481px) and (max-width: 1200px) {
      font-size: 0.7rem;
    }
  }
`;

const SkillStack = styled.div`
  width: 100%;
  height: 20%;
  margin-bottom: 12px;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Des = styled.div`
  width: 100%;
  height: 80%;
  background-color: ${(props) => props.theme.bgBoard};
  line-height: 3rem;
  padding: 10px;
  @media screen and (max-width: 480px) {
    line-height: 2rem;
    font-size: 0.9rem;
  }
  @media screen and (min-width: 481px) and (max-width: 1200px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`;
const Card = () => {
  const [boardWidth, setBoardWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const array = [
    {
      name: "calc",
      skill: ["typescript", "react", "styled-components"],
      images: CalcMain,
      des: "?????? ?????????, ??????????????? ?????????, 4????????? ???????????? ???????????? ?????? ??????????????????, react hook??? ???????????? ??? ?????? ??????????????????.",
      site: "https://limyira.github.io/calculator/",
      github: "https://github.com/limyira/calculator",
      duration: "10??? 1??? ~ 10??? 11???",
    },
    {
      name: "coins",
      skill: ["react", "typescript", "react-query", "recoil"],
      images: CoinMain,
      des: "recoil??? ????????????, react-query ??????, ?????? ????????? ????????? ??? ??? ????????????.",
      site: "https://limyira.github.io/typescript-cointracker/",
      github: "https://github.com/limyira/typescript-cointracker",
      duration: "8??? 21??? ~ 8??? 25???",
    },
    {
      name: "portFoilo",
      skill: ["react", "typescript", "netlify", "recoil"],
      images: PortMain,
      des: "?????? ?????????????????? ??????????????????????????????, ??????????????? ???????????? ?????? ???????????? ????????????????????????.",
      site: "https://limyira.github.io/portFolio/",
      github: "https://github.com/limyira/portFolio",
      duration: "12??? 1??? ~ 12??? 12???",
    },
    {
      name: "todo",
      skill: ["react", "typescript", "beautiful-dnd"],
      images: TodoMain,
      des: "react-beautiful-dnd ???????????? ???????????? ????????? ????????? ?????????????????? ??????????????????.",
      site: "https://limyira.github.io/typescript-todo/",
      github: "https://github.com/limyira/typescript-todo",
      duration: "9??? 1??? ~ 9??? 5???",
    },
    {
      name: "car",
      skill: [
        "react",
        "recoil",
        "nodeJs",
        "mongoDB",
        "netlify",
        "heroku",
        "typescript",
      ],
      images: CarglassMain,
      des: "?????????????????? ?????????????????? ????????? ?????????????????? ??????????????? ?????? ??? ?????? ??????????????????. ????????? express??? ???????????????, heroku??? ?????? ??????, ???????????? react??? ???????????? netlify??? ??????????????????.",
      site: "https://www.carglass-beta.com/",
      github: "https://github.com/limyira/carglass-beta",
      duration: "11??? 7??? ~ 11??? 30???",
    },
  ];

  useEffect(() => {
    setBoardWidth(
      carousel.current?.scrollWidth! - carousel.current?.offsetWidth!
    );
  });
  return (
    <Carousel ref={carousel}>
      <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -boardWidth }}>
        {array.map((i) => (
          <Item key={i.name}>
            <ItemCard>
              <Front>
                <Image>
                  <ImgBox>
                    <img src={i.images} />
                  </ImgBox>
                </Image>
              </Front>
              <Back>
                <InnerBack>
                  <SkillBox>
                    <SkillArray>
                      <SkillStack>????????????</SkillStack>
                      <SkillItem>
                        {i.skill.map((p) => (
                          <div
                            key={p}
                            style={{
                              backgroundColor:
                                p === "react"
                                  ? "#48dbfb"
                                  : p === "typescript"
                                  ? "#54a0ff"
                                  : p === "heroku"
                                  ? "#ff9ff3"
                                  : p === "netlify"
                                  ? "#00d2d3"
                                  : p === "recoil"
                                  ? "#c8d6e5"
                                  : p === "mongoDB"
                                  ? "#1dd1a1"
                                  : p === "react-query"
                                  ? "#ff6b6b"
                                  : p === "beautiful-dnd"
                                  ? "#feca57"
                                  : p === "nodeJs"
                                  ? "#576574"
                                  : p === "styled-components"
                                  ? "rgba(250, 211, 144, 0.6)"
                                  : "#ff9ff3",
                            }}
                          >
                            {p}
                          </div>
                        ))}
                      </SkillItem>
                    </SkillArray>
                  </SkillBox>
                  <Des>{i.des}</Des>
                </InnerBack>
                <LinkBox>
                  <LeftLink>
                    <a href={i.github} target="_blank">
                      Github
                    </a>
                  </LeftLink>
                  <RightLink>
                    <a href={i.site} target="_blank">
                      Site
                    </a>
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
