import styled from "styled-components";

export default function JoinTitle() {
  return (
    <TitleContainer>
      <Join>회원가입</Join>
      <SectionBox>
        <JoinSection>① 약관동의</JoinSection>
        <JoinSection>② 정보입력</JoinSection>
        <JoinSection>③ 가입 완료</JoinSection>
      </SectionBox>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Join = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #5263ff;
  margin-right: 40px;
`;

const SectionBox = styled.div`
  margin-left: 20px;
  display: flex;
`;

const JoinSection = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #7e7e7e;
  margin-right: 40px;
`;
