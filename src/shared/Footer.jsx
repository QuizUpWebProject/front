import styled from "styled-components";
import FooterIcon from "../assets/footer icon.png";

export default function Footer() {
  return (
    <Wrapper>
      <ContentWrapper>
        <QuizUP>(주) 퀴즈업</QuizUP>
        <Info>
          <Text>(주) 퀴즐렛 Copyrights ⓒ all rights reserved Quizup</Text>
          <Text>
            Planner & Designer 김소민 Frontend 정서연 Frontend 한지수 Backend
            이건희
          </Text>
        </Info>
      </ContentWrapper>
      <Img src={FooterIcon} alt="footer-icon" />
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin: 0;
  display: flex;
  gap: 88px;
  padding: 51px 0 90px 0;
  background-color: #24252a;
  margin-top: 188px;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 250px;
`;

const QuizUP = styled.div`
  color: #5263ff;
  font-size: 18px;
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Text = styled.div`
  color: #a8a8a8;
  font-size: 15px;
`;

const Img = styled.img`
  width: 328px;
  height: 137px;
  margin-right: 30px;
`;
