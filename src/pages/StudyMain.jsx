import SelectBox from "../components/studyroom/SelectBox";
import StudyList from "../components/studyroom/StudyList";

const StudyMain = () => {
  return (
    <>
      <div>나의 그룹 스터디방 (0)</div>
      <div>
        가입된 스터디방이 없네요! 기므바로 스터디방에 가입하고 스터디원과 답변을
        공유해보세요.
      </div>
      <div>
        <SelectBox />
        <input placeholder="검색어를 입력하세요." />
      </div>
      <div>
        <StudyList />
      </div>
    </>
  );
};

export default StudyMain;
