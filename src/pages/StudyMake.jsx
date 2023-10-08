import styled from "styled-components";
import SelectCategory from "../components/studyroomMake/SelectCategory";
import SelectPeople from "../components/studyroomMake/SelectPeople";

const StudyMake = () => {
  return (
    <Wrapper>
      <div>
        <div>그룹명*</div>
        <input />
        <button>중복 확인</button>
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
        <input
          text="password"
          placeholder="참여코드 설정은 숫자 4자리 입니다."
        />
      </div>

      <div>
        <div>소개글</div>
        <textarea placeholder="궁금할 스터디원들에게 어떤 스터디방인지 설명해주세요. ex) 규칙사항, 준비하는 문제에 대해 간략하게 적어보세요." />
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

const MakeBtn = styled.button`
  width: 866px;
  height: 39px;
  border: none;
  border-radius: 6px;
  background-color: #5263ff;
  color: #ffffff;
`;
