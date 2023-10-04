import styled from "styled-components";
import UserIcon from "../../assets/people.png";
import HeartIcon from "../../assets/heart.png";
import ChatIcon from "../../assets/chat.png";
import { useNavigate } from "react-router-dom";

export default function RecommendItem() {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate("/study/:studyroomid")}>
      <Container>
        <UserInfo>
          <UserImage src={UserIcon} alt="user" />
          <UserName>소밍밍</UserName>
        </UserInfo>
        <UserStats>
          <Stat>
            <UserImage src={HeartIcon} alt="heart" />
            26
          </Stat>
          <Stat>
            <UserImage src={ChatIcon} alt="chat" />
            04
          </Stat>
        </UserStats>
      </Container>
      <ItemInfo>
        <ItemText>정보처리기사 실기_2023</ItemText>
        <ItemStat>91문제</ItemStat>
      </ItemInfo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 482px;
  height: 106px;
  background-color: #24252b;
  border: 1px solid #555555;
  border-radius: 6px;
  margin-bottom: 20px;
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
  magin-right: 10px;
  font-size: 16px;
`;

const UserStats = styled.div`
  display: flex;
  align-items: center;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 16px;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  //justify-content: space-between;
  margin-top: 25px;
`;

const ItemText = styled.div`
  text-align: left;
  margin-right: 30px;
`;

const ItemStat = styled.span`
  text-align: center;
  margin-left: 10px;
`;
