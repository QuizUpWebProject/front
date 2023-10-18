import styled from "styled-components";
import EvaluationModal from "../components/studyroomWorkAnswer/EvaluationModal";

const FrontAnswer = () => {
  return (
    <Wrapper>
      <Container>
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
      </Container>

      <Container>
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
      </Container>

      {/* 문제 평가하기 버튼 */}
      <EvaluationModal />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1090px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-bottom: 60px;
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
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default FrontAnswer;
