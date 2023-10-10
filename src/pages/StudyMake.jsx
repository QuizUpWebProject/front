import styled from "styled-components";
import SelectCategory from "../components/studyroomMake/SelectCategory";
import SelectPeople from "../components/studyroomMake/SelectPeople";
import { useState } from "react";

const StudyMake = () => {
  const [isDuplicate, setIsDuplicate] = useState(false); // 중복 확인 상태관리
  const [code, setCode] = useState(""); // 비공개 코드 상태관리
  const [isCodeValid, setIsCodeValid] = useState(true); // 비공개 코드 유효성 검사
  const [introduction, setIntroduction] = useState(""); // textarea 글자 제한 유효성 검사

  // 중복 확인 버튼
  const handleCheckDuplicate = () => {
    // 중복 확인 로직 추가 예정
    setIsDuplicate(true);
  };

  const handleCode = (event) => {
    const inputValue = event.target.value;

    // 정규식으로 유효성 검사
    const isValid = /^\d{4}$/.test(inputValue);
    setIsCodeValid(isValid);
    setCode(inputValue);
  };

  const handleIntroduction = (event) => {
    const inputValue = event.target.value;
    setIntroduction(inputValue);
  };

  const isIntroductionTooLong = introduction.length > 100000;

  return (
    <Wrapper>
      <Container>
        <Title>
          그룹명<span>*</span>
        </Title>
        <GroupNameContainer>
          <GroupNameInput />
          <ConfirmBtn onClick={handleCheckDuplicate}>중복 확인</ConfirmBtn>
        </GroupNameContainer>
        <GrouptNameText>사용 가능한 특수문자는 (_/-/@/.)입니다.</GrouptNameText>
        {isDuplicate && (
          <CheckText>
            현재 입력한 그룹방은 이미 있는 그룹방 입니다. 새로 입력해주세요.
          </CheckText>
        )}
      </Container>

      <Container>
        <Title>
          그룹 카테고리<span>*</span>
        </Title>
        {/* select (front/back) */}
        <SelectCategory />
      </Container>

      <Container>
        <Title>
          제한 인원수<span>*</span>
        </Title>
        {/* select (1~50) */}
        <SelectPeople />
      </Container>

      <Container>
        <CodeTitle>
          참여코드{"   "}
          <CodeText>
            (선택사항) 공개 스터디방으로 원할 경우 빈칸으로 제출하세요.
          </CodeText>
        </CodeTitle>
        <CodeInput
          type="password"
          placeholder="참여코드 설정은 숫자 4자리 입니다."
          value={code}
          onChange={handleCode}
        />
        {!isCodeValid && (
          <CodeErrorMessage>
            참여코드는 4자리 숫자로 입력해야 합니다.
          </CodeErrorMessage>
        )}
      </Container>

      <Container>
        <Title>소개글</Title>
        <IntroduceArea
          placeholder="궁금할 스터디원들에게 어떤 스터디방인지 설명해주세요. ex) 규칙사항, 준비하는 문제에 대해 간략하게 적어보세요."
          value={introduction}
          onChange={handleIntroduction}
        />
        <CharCountText>{introduction.length} / 100,000</CharCountText>
        {isIntroductionTooLong && (
          <IntroductionErrorMessage>
            해당 글자수를 초과하였습니다. 글자수를 줄여주세요.
          </IntroductionErrorMessage>
        )}
      </Container>

      <MakeBtn>방 만들기</MakeBtn>
    </Wrapper>
  );
};

export default StudyMake;

const Wrapper = styled.div`
  max-width: 1090px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.div`
  fontsize: 16px;
  font-weight: 600;
  margin-bottom: 15px;

  span {
    color: #ff0000;
  }
`;

const GroupNameContainer = styled.div`
  margin-bottom: 15px;
`;

const GroupNameInput = styled.input`
  width: 642px;
  height: 42px;
  padding: 5px;
  background-color: #3f424e;
  border: none;
  border-radius: 6px;
  margin-right: 20px;
  color: #ffffff;
`;

const ConfirmBtn = styled.button`
  width: 180px;
  height: 42px;
  border: none;
  border-radius: 5px;
  background-color: #5263ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  margin-left: 20px;
`;

const GrouptNameText = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #939393;
`;

const CheckText = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #ff0000;
`;

const CodeInput = styled.input`
  width: 866px;
  height: 42px;
  padding: 5px;
  background-color: #3f424e;
  border: none;
  border-radius: 6px;
  color: #ffffff;

  &::placeholder {
    color: #ffffff;
    padding: 5px;
    font-size: 14px;
    font-weight: 400;
  }
`;

const CodeTitle = styled.div`
  fontsize: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const CodeText = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #939393;
  margin-left: 10px;
`;

const CodeErrorMessage = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #ff0000;
  margin-top: 5px;
`;

const IntroduceArea = styled.textarea`
  width: 866px;
  height: 93px;
  padding: 5px;
  background-color: #3f424e;
  border: none;
  border-radius: 6px;
  color: #ffffff;

  &::placeholder {
    color: #ffffff;
    padding: 5px;
    font-size: 14px;
    font-weight: 400;
  }
`;

const CharCountText = styled.div`
  font-size: 13px;
  color: #939393;
  margin-top: 5px;
  text-align: right;
`;

const IntroductionErrorMessage = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #ff0000;
  margin-top: 5px;
`;

const MakeBtn = styled.button`
  width: 866px;
  height: 39px;
  border: none;
  border-radius: 6px;
  background-color: #5263ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 50px;
`;
