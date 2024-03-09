import styled from "styled-components";
import Banner from "../components/main/Banner";
import Description from "../components/main/Description";

const Main = () => {
  return (
    <Wrapper>
      <Banner />

      <Description />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

export default Main;
