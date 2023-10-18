import styled from "styled-components";
import JoinTitle from "../components/join/JoinTitle";
import JoinAgreeBox from "../components/join/JoinAgreeBox";

const JoinAgree = () => {
  return (
    <Wrapper>
      <JoinTitle section1="#5263ff" />

      <JoinAgreeBox />
    </Wrapper>
  );
};

export default JoinAgree;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
