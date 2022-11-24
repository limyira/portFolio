import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: sticky;
  height: 100vh;
  background-color: red;
  top: 0px;
  z-index: 5;
`;

const Footer = () => {
  return <Container>footer</Container>;
};

export default Footer;
