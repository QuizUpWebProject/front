import styled from "styled-components";

export default function JoinTitle({ section1, section2, section3 }) {
  return (
    <TitleContainer>
      <Join>회원가입</Join>
      <SectionBox>
        <JoinSection color={section1}>① 약관동의</JoinSection>
        <JoinSection color={section2}>② 정보입력</JoinSection>
        <JoinSection color={section3}>③ 가입완료</JoinSection>
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
  color: ${(props) => props.color || "#7e7e7e"};
  margin-right: 40px;
`;
