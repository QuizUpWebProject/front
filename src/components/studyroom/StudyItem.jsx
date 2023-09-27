import styled from "styled-components";
import UserIcon from "../../assets/people.png";
import GroupIcon from "../../assets/group.png";
import LockIcon from "../../assets/lock.png";
import JoinBtn from "../../assets/Btn_join.png";

export default function StudyItem() {
  return (
    <Container>
      <div>프론트엔드</div>
      <div>스터디방명 이름 예시 스터디방명 이름 예시</div>
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
      <img src={JoinBtn} alt="가입하기" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #868686;
  padding: 10px;
  border-right: none;
  border-left: none;
  width: 1090px;
`;

const Icon = styled.img`
  margin-right: 10px;
`;
