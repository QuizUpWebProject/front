import styled from "styled-components";
import UserIcon from "../../assets/people.png";
import GroupIcon from "../../assets/group.png";
import JoinIcon from "../../assets/Btn_join.png";

export default function RecommendItem() {
  return (
    <Wrapper>
      <ItemInfo>스터디방명 이름 예시 SW 삼성 2023 하반기 공채</ItemInfo>

      <Container>
        <UserInfo>
          <Stat>
            <UserImage src={UserIcon} alt="user" />
            <UserName>소밍밍</UserName>
          </Stat>
          <Stat>
            <UserImage src={GroupIcon} alt="group" />
            21/50
          </Stat>
        </UserInfo>
        <UserImage src={JoinIcon} alt="join" />
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
