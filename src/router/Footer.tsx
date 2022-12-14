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
  background-color: ${(props) => props.theme.bgColor1};
  display: flex;
  align-items: flex-end;
  background-image: url(${Earth});
  background-position: start;
  background-repeat: no-repeat;
  background-size: contain;
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
  width: 45%;
  height: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: inherit;
  /* background-color: ${(props) => props.theme.bgColor2}; */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 2rem;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 43%;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    width: 80%;
    height: 30%;
  }
`;
const Photo = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;

  border-radius: 125px;
  background-image: url(${Myface});
  background-size: cover;
  background-position: center;
  div {
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 480px) {
    width: 125px;
    height: 125px;
  }
`;
const Info = styled.div`
  width: 600px;
  height: 110px;
  padding: 10px;
  margin: 10px auto;
  @media screen and (max-width: 480px) {
    width: 340px;
    height: 140px;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  font-size: 1.3rem;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
  div {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-left: 10px;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  font-size: 1.3rem;
  height: 100%;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
  div {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

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
    width: 80%;
    height: 24%;
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
  width: 90%;
  height: 10%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 2.3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
const Contents = styled.div`
  width: 90%;
  height: 70%;
  margin: 0 auto;
  padding: 1rem;
  line-height: 2rem;
  font-size: 1.2rem;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
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
            시각디자인을 전공하여 유저 경험과 디자인에 민감합니다.
            <br /> 새로운 기술과 트렌드를 익히고 도전하는 것을 좋아합니다.
            <br />
            커뮤니케이션의 중요성을 믿습니다. <br />
            어제보다 나은 사람이 되는 것을 목표로 하고 끊임없이 공부합니다.
          </Contents>
        </Des>
      </InnerContainer>
    </Container>
  );
};

export default Footer;
