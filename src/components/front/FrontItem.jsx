import styled from "styled-components";
import { Link } from 'react-router-dom';
import UserIcon from "../../assets/people.png";
import LikeIcon from "../../assets/heart.png";
import CmtIcon from "../../assets/chat.png";
import StartBtn from "../../assets/Btn_start.png";

// 숫자를 포맷하는 함수
function formatNullNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatNumber(num) {
  return num < 10 ? `0${num}` : num.toString();
}

// 날짜를 포맷하는 함수
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  
  // 'YYYY.MM.DD' 형식으로 반환
  return `${year}.${month}.${day}`;
}

const FrontItem = ({ item, index}) => {
  // null이면 0으로 설정
  const viewCount = item.viewcount !== null ? formatNullNumber(item.viewcount) : 0;
  const recommendCount = item.recommendcount !== null ? formatNullNumber(item.recommendcount) : 0;

  const formattedDate = formatDate(item.created_at);

  return (
    <Container>
      <Td width="17px">{formatNumber(index+1)}</Td>
      <Td width="322px">{item.title}</Td>
      <Td width="80px">{formattedDate}</Td>
      <Td width="100px">
        <IconTextWrapper>
          <Icon src={UserIcon} alt="작성자" />{item.userid}
        </IconTextWrapper>
      </Td>
      <Td width="33px">
        <IconTextWrapper>
          <Icon src={LikeIcon} alt="추천" />{viewCount}
        </IconTextWrapper>
      </Td>
      <Td width="33px">
        <IconTextWrapper>
          <Icon src={CmtIcon} alt="댓글" />{recommendCount}
        </IconTextWrapper>
      </Td>
      <Td width="96px">
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
  padding: 0 15px;
  width: ${props => props.width};
`

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  padding: 0 5px;
`;

export default FrontItem;