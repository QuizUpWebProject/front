import styled from "styled-components";
import JoinTitle from "../components/join/JoinTitle";
import JoinForm from "../components/join/JoinForm";

const JoinFormP = () => {
  return (
    <Wrapper>
      <JoinTitle section2="#5263ff" />

      <JoinForm />
    </Wrapper>
  );
};

export default JoinFormP;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
