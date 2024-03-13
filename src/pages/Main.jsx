import styled from "styled-components";
import Banner from "../components/main/Banner";
import Description from "../components/main/Description";
import Ranking from "../components/main/Ranking";

const Main = () => {
  return (
    <Wrapper>
      <Banner />

      <Description />

      <Ranking />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

export default Main;
