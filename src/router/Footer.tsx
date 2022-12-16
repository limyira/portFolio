import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk, faUser } from "@fortawesome/free-solid-svg-icons";
import Myface from "../images/Myface.jpg";
import green from "../images/bggreen.png";
import Earth from "../images/earth.png";
import Moon from "../images/moon.png";
const Container = styled.div`
  width: 100%;
  position: sticky;
  height: 100vh;
  top: 0px;
  z-index: 2;
  background-color: ${(props) => props.theme.resumeBg};
  display: flex;
  align-items: flex-end;
  color: ${(props) => props.theme.textColor};
  @media screen and (max-width: 880px) {
    height: 100vh;
  }
`;
const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Personal = styled.div`
  width: 40%;
  height: 40%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: inherit;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 2rem;
  background-color: ${(props) => props.theme.resumeBo};
  min-width: fit-content;
  min-height: fit-content;
  @media screen and (max-width: 379px) {
    width: 85%;
    height: 36%;
    margin-top: 30px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 380px) and (max-width: 480px) {
    width: 85%;
    height: 35%;
    margin-top: 30px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    width: 76%;
    height: 30%;
  }
  @media screen and (min-width: 851px) and (max-width: 1400px) {
    width: 55%;
    height: 43%;
  }
`;

const Photo = styled.div`
  width: 150px;
  height: 150px;
  margin: 20px auto;

  border-radius: 125px;
  background-image: url(${Myface});
  background-size: cover;
  background-position: center;
  div {
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 851px) and (max-width: 1400px) {
    width: 110px;
    height: 110px;
  }
`;
const Info = styled.div`
  width: 600px;
  height: 110px;
  padding: 10px;
  margin: 10px auto;

  @media screen and (max-width: 480px) {
    width: 280px;
    height: 140px;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    width: 500px;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  font-size: 1.3rem;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    width: fit-content;
    height: 50%;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    font-size: 1.2rem;
  }
  div {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 480px) {
      height: 60%;
    }
    span {
      margin-left: 10px;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  font-size: 1.3rem;
  height: 100%;
  width: fit-content;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;

    margin-top: 10px;
    height: 50%;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    font-size: 1.2rem;
  }
  div {
    width: 100%;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 480px) {
      height: 60%;
    }
    span {
      margin-left: 10px;
    }
    a {
      transition: 0.5s ease-in-out;
      :hover {
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
`;
const Des = styled.div`
  width: 50%;
  height: 50%;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    width: 90%;
    height: 50%;
    margin-top: 20px;
    font-size: 1rem !important;
  }
  @media screen and (min-width: 851px) and (max-width: 1400px) {
    width: 70%;
    height: 60%;
    margin-top: 20px;
    font-size: 1rem !important;
  }
`;
const InnerInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;
const H1 = styled.div`
  width: 82%;
  height: 15%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 2.3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 8px;
    height: 10%;
  }
`;
const Contents = styled.div`
  width: 90%;
  height: 87%;
  margin: 0 auto;
  padding: 1rem;
  line-height: 2rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    flex-direction: column;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
  }
`;
const ContentItem = styled.div`
  width: 45%;
  height: 80%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 1rem;
  padding: 0.6rem;
  margin-bottom: 10px;
  min-height: fit-content;
  background-color: ${(props) => props.theme.resumeBo};

  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    height: 70%;
  }
`;
const ContentH1 = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    padding: 5px 2px;
  }
`;
const ContentDes = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 10px;
  font-size: 0.9rem;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-top: 5px;
    line-height: 1.2rem;
  }
  @media screen and (min-width: 481px) and (max-width: 750px) {
    font-size: 0.7rem;
    margin-top: 5px;
    line-height: 1.4rem;
  }
  span {
    color: ${(props) => props.theme.accentColor};
  }
`;
const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <Personal>
          <Photo></Photo>
          <Info>
            <InnerInfo>
              <Left>
                <div>
                  <FontAwesomeIcon icon={faPhone} />
                  <span>010-4722-2968</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                  <span>임이라</span>
                </div>
              </Left>
              <Right>
                <div>
                  <FontAwesomeIcon icon={faMailBulk} />
                  <span>dladlfk1@gmail.com</span>
                </div>
                <div>
                  <a href="https://github.com/limyira"> Github</a>
                </div>
              </Right>
            </InnerInfo>
          </Info>
        </Personal>
        <Des>
          <H1>Introduce</H1>
          <Contents>
            <ContentItem>
              <ContentH1>나의 성격</ContentH1>
              <ContentDes>
                <span>역지사지의 자세를 가지고있습니다.</span>
                <br />
                사적으로 대인관계에서 타인의 마음을 이해하는데 힘쓰고,
                공적으로는 개발을 하면서 사용자의 니즈를 반영한 기능을 개발하여
                개발자로서의 역량을 키우고 있습니다.
              </ContentDes>
            </ContentItem>
            <ContentItem>
              <ContentH1>나의 포부</ContentH1>
              <ContentDes>
                <span>꾸준함이라는 강점 </span>
                <br />
                새벽 아르바이트를 3년간 하며 학업 및 자격증 공부를
                병행하였습니다. 저의 강점을 활용하여 새로운 기술이 쏟아져 나오는
                프론트 세계의 전문가가 되겠습니다.
              </ContentDes>
            </ContentItem>
          </Contents>
        </Des>
      </InnerContainer>
    </Container>
  );
};

export default Footer;
