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
      <Td>{formatNumber(index+1)}</Td>
      <Td>{item.title}</Td>
      <Td>{item.date}</Td>
      <Td>
        <IconTextWrapper>
          <Icon src={ViewIcon} alt="조회수" />{formatNumber(item.view)}
        </IconTextWrapper>
      </Td>
      <Td>
        <Link to='/front/:worklistid/:workid'>
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

const Td = styled.td`
  padding: 0 10px;
`

export default FrontWorkItem;