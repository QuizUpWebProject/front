import styled from "styled-components";
import BtnEdit from "../../assets/Btn_edit.png";
import LikeIcon from "../../assets/heart.png";
import CmtIcon from "../../assets/chat.png";
import { Link } from "react-router-dom";

export default function MyWorkItme() {
  return (
    <Wrapper>
      <WorkInfo>
        <Title>정보처리기사 실기_2023</Title>
        <span>91문제</span>
      </WorkInfo>
      <Container>
        <ItemInfo>
          <Stat>
            <UserImage src={LikeIcon} alt="like" />
            28
          </Stat>
          <Stat>
            <UserImage src={CmtIcon} alt="comment" />
            04
          </Stat>
        </ItemInfo>
        <ImageLink to="/front/:worklistid">
          <Img src={BtnEdit} alt="수정하기" />
        </ImageLink>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 418px;
  height: 106px;
  background-color: #24252B;
  border: 1px solid #555555;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 20px;
`;

const WorkInfo = styled.div`
 display: flex;
 font-size: 15px;
 justify-content: space-between;
 margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 17px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const UserImage = styled.img`
  margin-right: 7px;
`;

const ImageLink = styled(Link)`
  text-decoration: none;
`;
const Img = styled.img`
  cursor: pointer;
`;