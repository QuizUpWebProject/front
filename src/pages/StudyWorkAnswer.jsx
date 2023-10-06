import styled from "styled-components";
import HelpIcon from "../assets/help.png";
import { useState } from "react";

const StudyWorkAnswer = () => {
  // 답안 더보기 (toggle)
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Wrapper>
      <div>
        <Title>모범 답안</Title>
        <Line></Line>
        <Content>
          헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다.
          국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다.
          국무총리,국무위원 또는 정부위원은 국회나 그 위원회에 출석하여
          국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 모든
          국민은 법 앞에 평등하다. 누구든지 성별,종교 또는 사회적 신분에 의하여
          정치적,경제적,사회적,문화적 생활의 모든 영역에 있어서 차별을 받지
          아니한다.
        </Content>
        <Line></Line>
      </div>
      <div>
        <Title>내가 입력한 답안</Title>
        <Line></Line>
        <Content>
          헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다.
          국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다.
          국무총리,국무위원 또는 정부위원은 국회나 그 위원회에 출석하여
          국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 모든
          국민은 법 앞에 평등하다. 누구든지 성별,종교 또는 사회적 신분에 의하여
          정치적,경제적,사회적,문화적 생활의 모든 영역에 있어서 차별을 받지
          아니한다.
        </Content>
        <Line></Line>
      </div>
      <Button>
        문제 평가하기
        <Img src={HelpIcon} alt="help" />
      </Button>

      <div>
        <Title>스터디원이 입력한 답안 (3)</Title>
        <Line></Line>
        <Content>
          헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다.
          국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다.
          국무총리,국무위원 또는 정부위원은 국회나 그 위원회에 출석하여
          국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 모든
          국민은 법 앞에 평등하다. 누구든지 성별,종교 또는 사회적 신분에 의하여
          정치적,경제적,사회적,문화적 생활의 모든 영역에 있어서 차별을 받지
          아니한다.
        </Content>
        <Line></Line>
      </div>

      {/* 스터디원이 입력한 답안 (더보기 버튼으로 추가 더보기) */}
      {showMore && (
        <>
          <div>
            <Title>스터디원이 입력한 답안 (3)</Title>
            <Line></Line>
            <Content>
              헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다.
              국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다.
              국무총리,국무위원 또는 정부위원은 국회나 그 위원회에 출석하여
              국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다.
              모든 국민은 법 앞에 평등하다. 누구든지 성별,종교 또는 사회적
              신분에 의하여 정치적,경제적,사회적,문화적 생활의 모든 영역에
              있어서 차별을 받지 아니한다.
            </Content>
            <Line></Line>
          </div>
          <div>
            <Title>스터디원이 입력한 답안 (3)</Title>
            <Line></Line>
            <Content>
              헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다.
              국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다.
              국무총리,국무위원 또는 정부위원은 국회나 그 위원회에 출석하여
              국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다.
              모든 국민은 법 앞에 평등하다. 누구든지 성별,종교 또는 사회적
              신분에 의하여 정치적,경제적,사회적,문화적 생활의 모든 영역에
              있어서 차별을 받지 아니한다.
            </Content>
            <Line></Line>
          </div>
        </>
      )}
      <ShowMoreBtn onClick={toggleShowMore}>
        {showMore ? "답안 숨기기" : "답안 더보기"}
      </ShowMoreBtn>
    </Wrapper>
  );
};

export default StudyWorkAnswer;

const Wrapper = styled.div`
  max-width: 1090px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Line = styled.div`
  width: 1090px;
  border: 1px solid #c7c7c7;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 16px;
  font-size: 500;
  color: #d1d1d1;
`;

const Button = styled.button`
  width: 1090px;
  height: 46px;
  background-color: #5263ff;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 70px;
`;

const Img = styled.img`
  margin-left: 10px;
  width: 17px;
  height: 17px;
`;

const ShowMoreBtn = styled.button`
  width: 1090px;
  height: 37px;
  border: none;
  border-radius: 6px;
  background-color: #3f424e;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
`;
