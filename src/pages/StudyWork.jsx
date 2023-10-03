import styled from "styled-components";
import PlusBtn from "../assets/Btn_plus.png";
import ShareBtn from "../assets/Btn_share.png";

const StudyWork = () => {
  return (
    <Wrapper>
      <Title>삼성 SW 역량테스트 기출문제 스터디방 {">"} 21번 문제 제목 </Title>
      <Question>Q.</Question>
      <QContent>
        문제 예시 입력 브라우저에서 렌더 트리를 구축하는 과정은 어떻게 될까요?
      </QContent>
      <Line></Line>
      <Buttons>
        <Img src={PlusBtn} alt="plus" />
        <Img src={ShareBtn} alt="share" />
      </Buttons>
      <Answer>A.</Answer>
      <div>
        <textarea placeholder="정답을 입력해주세요" type="text-area" />
        <button>입력</button>
      </div>
      <div>추천 스터디방</div>
    </Wrapper>
  );
};

export default StudyWork;

const Wrapper = styled.div`
  max-width: 1090px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 14.5px;
  color: #c9c9c9;
  margin-bottom: 30px;
`;

const Question = styled.div`
  color: #5263ff;
  font-size: 35px;
  font-weight: 400;
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
  margin-bottom: 30px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: right;
  align-items: left;
  text-align: left;
`;

const Img = styled.img`
  margin-right: 10px;
`;

const Answer = styled.div`
  color: #5263ff;
  font-size: 35px;
  font-weight: 400;
`;
