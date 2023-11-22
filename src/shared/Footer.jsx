import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <QuizUP>(주) 퀴즈업</QuizUP>
      <Info>
        <Text>(주) 퀴즐렛  Copyrights ⓒ all rights reserved Quizup</Text>
        <Text>Planner & Designer 김소민  Frontend 정서연  Frontend 한지수  Backend 이건희</Text>
      </Info>
    </Wrapper>
  );
} 

const Wrapper = styled.footer`
  height: 103px;
  width: 1090px;
  margin-bottom: 50px;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const QuizUP = styled.div`
  color: #5263FF;
  font-size: 18px;
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Text = styled.div`
  color: #A8A8A8;
  font-size: 15px;
`;