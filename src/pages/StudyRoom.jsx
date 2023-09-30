import styled from "styled-components";
import UserIcon from "../assets/people.png";
import GroupIcon from "../assets/group.png";
import LockIcon from "../assets/lock.png";
import WorkLikst from "../components/studyroom/WorkList";
import OutStudy from "../components/studyroom/OutStudy";
import MakeWork from "../components/studyroom/MakeWork";

const StudyRoom = () => {
  return (
    <Wrapper>
      <TopSection>
        <div>
          <TopTitle>삼성 SW 역량 테스트 기출 문제</TopTitle>
          <TopContent>
            <div>
              <Icon src={UserIcon} alt="작성자" />
              소밍밍
            </div>
            <div>
              <Icon src={GroupIcon} alt="인원" />
              21/50
            </div>
            <div>
              <Icon src={LockIcon} alt="비공개" />
              비공개
            </div>
          </TopContent>
        </div>

        <div>
          <MakeWork />
          <OutStudy />
        </div>
      </TopSection>

      <StudySection>
        <Box>
          <BoxTitle>👑 8월의 베스트 3인</BoxTitle>
          <Line></Line>
          <BoxContent></BoxContent>
        </Box>
        <Box>
          <BoxTitle>📌 공지사항 확인하세요.</BoxTitle>
          <Line></Line>
          <BoxContent>
            <BoxText>
              공지사항 글 예시 공지사항 글 예시 공지사항 글 예시 공지사항 글
              예시 조건 : 글자수 200제한, 방장만 입력 가능 공지사항은 1개뿐
            </BoxText>
          </BoxContent>
        </Box>
      </StudySection>

      {/* 문제 리스트 */}
      <div>
        <WorkLikst />
      </div>
    </Wrapper>
  );
};

export default StudyRoom;

const Wrapper = styled.div`
  max-width: 1090px;
  margin: 0 auto;
`;

const TopTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Icon = styled.img`
  margin-right: 10px;
  font-size: 13px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  margin-top: 15px;
`;

const StudySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;
`;

const Box = styled.div`
  padding: 10px;
  width: 530px;
  height: 165px;
  box-sizing: border-box;
  background-color: #3f424e;
`;

const BoxTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 8px;
`;

const Line = styled.div`
  width: 505px;
  border: 1px solid #dddddd;
  margin-bottom: 15px;
`;

const BoxContent = styled.div`
  width: 505px;
  height: 91px;
  background-color: #dddddd;
  border: 1px #dddddd;
  border-radius: 6px;
`;

const BoxText = styled.div`
  color: #a7a7a7;
  padding: 10px;
  font-size: 15px;
  font-wight: 500;
  color: #000000;
`;
