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
      <div>{formatNumber(index+1)}</div>
      <div>{item.title}</div>
      <div>{item.date}</div>
      <div>
        <IconTextWrapper>
          <Icon src={UserIcon} alt="작성자" />{item.user}
        </IconTextWrapper>
      </div>
      <div>
        <IconTextWrapper>
          <Icon src={LikeIcon} alt="추천" />{formatNumber(item.like)}
        </IconTextWrapper>
      </div>
      <div>
        <IconTextWrapper>
          <Icon src={CmtIcon} alt="댓글" />{formatNumber(item.cmt)}
        </IconTextWrapper>
      </div>
      <div>
        <Link to='/front/:worklistid'>
          <img src={StartBtn} alt="학습하기"/>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
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

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  padding: 0 5px;
`;

export default FrontItem;