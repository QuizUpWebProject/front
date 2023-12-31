import styled from "styled-components";
import Tooltip from "../components/front/Tooltip";
import FrontList from "../components/front/FrontList";

const FrontMain = () => {
  return (
    <Wrapper>
      <TitleContent>
        <Title>프론트엔드 문제집</Title>
        <Tooltip />
      </TitleContent>

      <div>
        <FrontList  />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1090px;
  margin: 0 auto;
`;

const TitleContent = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  height: 60px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  front-size: 20px;
  front-weight: bold;
  position: sticky;
  top: 0;
`;

export default FrontMain;
