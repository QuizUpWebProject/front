import styled from "styled-components";
import SelectCategory from "../components/studyroomMake/SelectCategory";
import SelectPeople from "../components/studyroomMake/SelectPeople";

const StudyMake = () => {
  return (
    <Wrapper>
      <div>
        <div>그룹명*</div>
        <div>
          <GroupNameInput />
          <ConfirmBtn>중복 확인</ConfirmBtn>
        </div>
        <div>사용 가능한 특수문자는 (_/-/@/.)입니다.</div>
      </div>

      <div>
        <div>그룹 카테고리*</div>
        {/* select (front/back) */}
        <SelectCategory />
      </div>

      <div>
        <div>제한 인원수*</div>
        {/* select (1~50) */}
        <SelectPeople />
      </div>

      <div>
        <div>
          참여코드 (선택사항) 공개 스터디방으로 원할 경우 빈칸으로 제출하세요.
        </div>
        <CodeInput
          text="password"
          placeholder="참여코드 설정은 숫자 4자리 입니다."
        />
      </div>

      <div>
        <div>소개글</div>
        <IntroduceArea placeholder="궁금할 스터디원들에게 어떤 스터디방인지 설명해주세요. ex) 규칙사항, 준비하는 문제에 대해 간략하게 적어보세요." />
      </div>

      <MakeBtn>방 만들기</MakeBtn>
    </Wrapper>
  );
};

export default StudyMake;

const Wrapper = styled.div`
  max-width: 1090px;
  margin: 0 auto;
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

const MakeBtn = styled.button`
  width: 866px;
  height: 39px;
  border: none;
  border-radius: 6px;
  background-color: #5263ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
`;
