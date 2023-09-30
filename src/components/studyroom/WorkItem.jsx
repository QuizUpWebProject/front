import styled from "styled-components";
import UserIcon from "../../assets/people.png";
import SeeIcon from "../../assets/see.png";
import StartBtn from "../../assets/Btn_start.png";
import { useNavigate } from "react-router-dom";

export default function WorkItem() {
  const navigate = useNavigate();

  return (
    <Container>
      <div>01</div>
      <Title onClick={() => navigate("/study/:studyroonid/worklistid")}>
        문제제목 예시 문제제목 예시 문제제목 예시 <Comment>[2]</Comment>
      </Title>
      <div>2023.08.18</div>
      <div>
        <Icon src={UserIcon} alt="user" />
        소밍밍
      </div>
      <div>
        <Icon src={SeeIcon} alt="people" />
        23
      </div>
      <div>
        <Icon src={StartBtn} alt="start" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #868686;
  padding: 10px;
  border-right: none;
  border-left: none;
  width: 1090px;
  font-size: 15px;
`;

const Icon = styled.img`
  margin-right: 10px;
`;

const Title = styled.button`
  border: none;
  outline: none;
  font-size: 15px;
  background-color: transparent;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: #5263ff;
  }
`;

const Comment = styled.div`
  margin-left: 10px;
`;
