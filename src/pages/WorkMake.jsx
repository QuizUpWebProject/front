import styled from "styled-components";

const WorkMake = () => {
  return (
    <Wrapper>
      <TopSection>
        <Title>문제집 만들기</Title>
        <PageInfo>
          CS면접 지식을 공유 할 수 있는 문제집이예요.<br/>
          문제집에서 제작된 문제들과 답변들은 공개 형식으로 다른 회원들이 문제와 답변을 공유 할 수 있습니다.
        </PageInfo>
      </TopSection>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 866px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #5263FF;
`;

const PageInfo = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

export default WorkMake;