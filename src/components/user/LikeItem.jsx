import styled from "styled-components";
import { Link } from 'react-router-dom';
import LikeIcon from "../../assets/heart_check.png";

const LikeItem = ({ item, onRemove}) => {
  return (
    <Container>
      <IconTextWrapper>
        <img src={LikeIcon} alt="좋아요" />
        <StyledLink to="/study/:studyroonid/worklistid">{item.title}</StyledLink>
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  
  &:hover {
    color: #5263ff;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 14px;
`;

export default LikeItem;