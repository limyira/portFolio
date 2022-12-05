import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: sticky;
  height: 100vh;
  top: 0px;
  z-index: 4;
  background-color: inherit;
  background-color: white;
  display: flex;
  align-items: flex-end;
`;
const InnerContainer = styled.div`
  width: 100%;
  height: 90%;
  background-color: yellow;
`;
const Personal = styled.div`
  width: 50%;
  height: 50%;
  background-color: red;
  margin: 0 auto;
`;
const Photo = styled.div`
  width: 300px;
  height: 300px;
  background-color: gray;
  margin: 0 auto;
  border-radius: 150px;
`;
const Info = styled.div`
  width: 600px;
  height: 120px;
  background-color: green;
  margin: 0 auto;
  padding: 10px;
`;
const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <Personal>
          <Photo></Photo>
          <Info></Info>
        </Personal>
      </InnerContainer>
    </Container>
  );
};

export default Footer;
