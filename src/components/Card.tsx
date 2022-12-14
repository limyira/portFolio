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
      des: "시급 계산기, 근로소득세 계산기, 4대보험 계산기로 처음만든 토이 프로젝트이며, react hook을 연습해볼 수 있는 기회였습니다.",
      site: "https://limyira.github.io/calculator/",
      github: "https://github.com/limyira/calculator",
      duration: "10월 1일 ~ 10월 11일",
    },
    {
      name: "coins",
      skill: ["react", "typescript", "react-query", "recoil"],
      images: CoinMain,
      des: "recoil로 상태관리, react-query 사용, 코인 가격과 기능을 알 수 있습니다.",
      site: "https://limyira.github.io/typescript-cointracker/",
      github: "https://github.com/limyira/typescript-cointracker",
      duration: "8월 21일 ~ 8월 25일",
    },
    {
      name: "portFoilo",
      skill: ["react", "typescript", "netlify", "recoil"],
      images: PortMain,
      des: "현재 포트폴리오로 배포되어있는사이트로, 웹사이트에 디자인을 보고 연습하여 만든사이트입니다.",
      site: "https://limyira.github.io/portFolio/",
      github: "https://github.com/limyira/portFolio",
      duration: "12월 1일 ~ 12월 12일",
    },
    {
      name: "todo",
      skill: ["react", "typescript", "beautiful-dnd"],
      images: TodoMain,
      des: "react-beautiful-dnd 기능으로 드로그앤 드랍이 가능한 투두리스트를 만들었습니다.",
      site: "https://limyira.github.io/typescript-todo/",
      github: "https://github.com/limyira/typescript-todo",
      duration: "9월 1일 ~ 9월 5일",
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
      des: "로그인기능과 아이엠포트를 연동한 결제기능으로 예약날짜를 잡을 수 있는 사이트입니다. 서버는 express로 구성했으며, heroku로 배포 했고, 프론트는 react를 사용하여 netlify로 배포했습니다.",
      site: "https://www.carglass-beta.com/",
      github: "https://github.com/limyira/carglass-beta",
      duration: "11월 7일 ~ 11월 30일",
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
                      <SkillStack>기술스택</SkillStack>
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
