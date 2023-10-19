import styled from "styled-components";
import JoinTitle from "../components/join/JoinTitle";
import Emotion from "../assets/joinend.png";
import { useNavigate } from "react-router-dom";

const JoinEnd = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <JoinTitle section3="#5263ff" />
      <Text>회원가입이 완료되었습니다</Text>
      <Img src={Emotion} alt="emotion" />
      <Button onClick={() => navigate("/")}>메인 홈페이지로 돌아가기</Button>
    </Wrapper>
  );
};

export default JoinEnd;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  text-align: center;
  margin-top: 70px;
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  width: 866px;
  height: 47px;
  border: none;
  border-radius: 6px;
  background-color: #5363ff;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  line-height: 29px;
  margin-top: 60px;
`;
