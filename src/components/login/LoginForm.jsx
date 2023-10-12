import styled from "styled-components";
import CheckIcon from "../../assets/circle check_.png";
import { useState } from "react";

export default function LoginForm() {
  const [isChecked, setIsChecked] = useState(false); // 로그인 유지하기 버튼 클릭 상태관리

  // 로그인 유지하기 기능 구현 필요
  const handleCheckClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <IDContaner>
        <Label>
          아이디<span>*</span>
        </Label>
        <Input placeholder="이메일을 입력해주세요." />
      </IDContaner>

      <PWContainer>
        <Label>
          비밀번호<span>*</span>
        </Label>
        <Input placeholder="비밀번호를 입력해주세요." />
      </PWContainer>

      <CheckContainer
        onClick={handleCheckClick}
        isChecked={isChecked} // isChecked 상태 전달
      >
        <CheckLabel>
          <Img src={CheckIcon} alt="check" isChecked={isChecked} />
          로그인 상태 유지하기
        </CheckLabel>
      </CheckContainer>

      <LoginBtn>로그인</LoginBtn>
    </div>
  );
}

const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;

  span {
    color: #ff0000;
  }
`;

const IDContaner = styled.div`
  margin-bottom: 75px;
`;

const Input = styled.input`
  width: 866px;
  height: 42px;
  background-color: #3f424e;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  padding: 5px;

  &::placeholder {
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    padding: 5px;
  }
`;

const PWContainer = styled.div`
  margin-bottom: 40px;
`;

const LoginBtn = styled.button`
  width: 877px;
  height: 47px;
  background-color: #5263ff;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  margin-top: 30px;
  align-items: center;
`;

const CheckContainer = styled.button`
  font-size: 15px;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isChecked ? "#5263ff" : "inherit")};
`;

const Img = styled.img`
  margin-right: 10px;
  filter: ${(props) => (props.isChecked ? "invert(100%)" : "inherit")};
`;

const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${(props) => (props.isChecked ? "#5263ff" : "inherit")};
`;
