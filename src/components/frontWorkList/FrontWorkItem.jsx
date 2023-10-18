import styled from "styled-components";
import { Link } from 'react-router-dom';
import ViewIcon from "../../assets/see.png";
import StartBtn from "../../assets/Btn_start.png";

function formatNumber(num) {
  return num < 10 ? `0${num}` : num.toString();
}

const FrontWorkItem = ({ item, index}) => {
  return (
    <Container>
      <div>{formatNumber(index+1)}</div>
      <div>{item.title}</div>
      <div>{item.date}</div>
      <div>
        <IconTextWrapper>
          <Icon src={ViewIcon} alt="조회수" />{formatNumber(item.view)}
        </IconTextWrapper>
      </div>
      <div>
        <Link to='/front/:worklistid/:workid'>
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
    margin-top: -1px; // 첫 번째 div는 마진을 설정 안함
  }
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  padding: 0 5px;
`;

export default FrontWorkItem;