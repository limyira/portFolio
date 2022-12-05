import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: sticky;
  height: 100vh;
  top: 0px;
  z-index: 4;
  background-color: inherit;
`;

const Footer = () => {
  return <Container>footer</Container>;
};

export default Footer;
