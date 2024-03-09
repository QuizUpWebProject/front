import styled from "styled-components";
import Banner from "../components/main/Banner";

const Main = () => {
  return (
    <Wrapper>
      <Banner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

export default Main;
