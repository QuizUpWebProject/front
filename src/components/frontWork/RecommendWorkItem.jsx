import styled from "styled-components";
import UserIcon from "../../assets/people.png";
import LikeIcon from "../../assets/heart.png";
import CmtIcon from "../../assets/chat.png";
import StartIcon from "../../assets/Btn_start.png";

export default function RecommendWorkItem() {
  return (
    <Wrapper>
      <ItemInfo>
        <Title>정보처리기사 실기_2023</Title>
        <span>91문제</span>
      </ItemInfo>

      <Container>
        <UserInfo>
          <Stat>
            <UserImage src={UserIcon} alt="user" />
            <UserName>소밍밍</UserName>
          </Stat>
          <Stat>
            <UserImage src={LikeIcon} alt="like" />
            28
          </Stat>
          <Stat>
            <UserImage src={CmtIcon} alt="comment" />
            04
          </Stat>
        </UserInfo>
        {/* 학습하기 버튼 클릭시 해당 문제집으로 이동 */}
        <UserImage src={StartIcon} alt="start" />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 482px;
  height: 106px;
  background-color: #24252b;
  border: 1px solid #555555;
  border-radius: 6px;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  margin-right: 7px;
`;

const UserName = styled.div`
  magin-right: 20px;
  font-size: 16px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 16px;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Title = styled.div`
  margin-right: 36px;
`;