import styled from "styled-components";
import { Link } from 'react-router-dom';
import UserIcon from "../../assets/people.png";
import LikeIcon from "../../assets/heart.png";
import CmtIcon from "../../assets/chat.png";
import StartBtn from "../../assets/Btn_start.png";

function formatNumber(num) {
  return num < 10 ? `0${num}` : num.toString();
}

const FrontItem = ({ item, index}) => {
  return (
    <Container>
      <Td>{formatNumber(index+1)}</Td>
      <Td>{item.title}</Td>
      <Td>{item.date}</Td>
      <Td>
        <IconTextWrapper>
          <Icon src={UserIcon} alt="작성자" />{item.user}
        </IconTextWrapper>
      </Td>
      <Td>
        <IconTextWrapper>
          <Icon src={LikeIcon} alt="추천" />{formatNumber(item.like)}
        </IconTextWrapper>
      </Td>
      <Td>
        <IconTextWrapper>
          <Icon src={CmtIcon} alt="댓글" />{formatNumber(item.cmt)}
        </IconTextWrapper>
      </Td>
      <Td>
        <Link to='/front/:worklistid'>
          <img src={StartBtn} alt="학습하기"/>
        </Link>
      </Td>
    </Container>
  );
};

const Container = styled.tr`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 1090px;
  font-size: 15px;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;

  &:not(:first-child) {
    margin-top: -1px; /* 첫 번째 div는 마진을 설정하지 않습니다. */
  }
`;

const Td = styled.td`
  padding: 0 10px;
`

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  padding: 0 5px;
`;

export default FrontItem;