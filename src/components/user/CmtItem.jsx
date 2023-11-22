import styled from "styled-components";
import CmtIcon from '../../assets/chat.png';

const CmtItem = ({ item, onRemove}) => {
  return (
    <Container> 
      <IconTextWrapper>
        <img src={CmtIcon} alt="댓글" />
        {item.title}
      </IconTextWrapper>
      
      <DateWrapper>
        {item.date}
        <Button onClick={() => onRemove(item.id)}>X</Button>
      </DateWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 7px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 7px;
  color: #828282;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 14px;
`;

export default CmtItem;