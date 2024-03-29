import { Link } from "react-router-dom";
import styled from "styled-components";
import "../assets/fonts/font.css";
import RecommendList from "../components/frontWork/RecommendWorkList";
import PlusModal from "../components/studyroomWork/PlusModal";
import ShareModal from "../components/studyroomWork/ShareModal";

const FrontWork = () => {
  return (
    <Wrapper>
      <Title>
        <WorkListLink to="/front/:worklistid">정보처리기사 실기_2023 문제집</WorkListLink>
        {" > "}21번 문제제목{""}
      </Title>
      <Question>Q.</Question>
      <QContent>문제 예시 입력 브라우저에서 렌더 트리를 구축하는 과정은 어떻게 될까요?</QContent>
      <Line />
      <Buttons>
        <PlusModal />
        <ShareModal />
      </Buttons>
      <Answer>A.</Answer>
      <ABox>
        <ATextArea placeholder="정답을 입력해주세요" type="text-area" />
        <AButton to="/front/:worklistid/:workid/answer">
          제출
        </AButton>
      </ABox>
      <RecommendList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
 max-width: 1090px;
 margin: 0 auto;
`;

const Title =  styled.div`
  font-size: 14.5px;
  color: #c9c9c9;
  margin-bottom: 45px;
`;

const WorkListLink = styled(Link)`
  text-decoration: none;
  color: #c9c9c9;

  &:hover {
    color: white;
  }
`;

const Question = styled.div`
  color: #5263ff;
  font-size: 35px;
  font-weight: 400;
  font-family: "Unbounded";
`;

const QContent = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 17px;
`;

const Line = styled.div`
  width: 1090px;
  border: 1px solid #868686;
  margin-top: 15px;
  margin-bottom: 26px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: right;
  align-items: left;
  text-align: left;
`;

const Answer = styled.div`
  color: #5263ff;
  font-size: 35px;
  font-weight: 400;
  font-family: "Unbounded";
  margin-top: 15px;
`;

const ABox = styled.div`
  width: 1090px;
  height: 158px;
  background-color: #3f424e;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`;

const ATextArea = styled.textarea`
  flex: 1;
  width: 958px;
  height: 90px;
  margin-right: 5px;
  margin-left: 10px;
  background-color: #8f8f8f;
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 10px;

  &::placeholder {
    font-size: 15px;
    padding: 5px;
    color: #000000;
  }
`;

const AButton = styled(Link)`
  width: 91px;
  height: 114px;
  border: none;
  border-radius: 6px;
  background-color: #a7a7a7;
  margin-right: 10px;  
  text-decoration: none;
  font-size: 15px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default FrontWork;
