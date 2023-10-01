import styled from "styled-components";
import PlusBtn from "../assets/Btn_plus.png";
import ShareBtn from "../assets/Btn_share.png";

const StudyWork = () => {
  return (
    <Wrapper>
      <Title>삼성 SW 역량테스트 기출문제 스터디방 {">"} 21번 문제 제목 </Title>
      <Question>Q.</Question>
      <div>
        문제 예시 입력 브라우저에서 렌더 트리를 구축하는 과정은 어떻게 될까요?
      </div>
      <div></div>
      <div>
        <Answer>A.</Answer>
        <div>
          <img src={PlusBtn} alt="plus" />
          <img src={ShareBtn} alt="share" />
        </div>
      </div>
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

const Answer = styled.div`
  color: #5263ff;
  font-size: 35px;
  font-weight: 400;
`;
