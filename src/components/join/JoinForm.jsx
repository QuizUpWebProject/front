import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function JoinForm() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Label>
          아이디<span>*</span>
        </Label>
        <div>
          <SInput placeholder="이메일을 입력해주세요." />
          <CheckBtn>중복 확인</CheckBtn>
        </div>
        <Text>사용 가능한 특수문자는 (_/-/@/.)입니다.</Text>
      </Container>

      <Container>
        <Label>
          비밀번호<span>*</span>
        </Label>
        <Input placeholder="비밀번호를 입력해주세요. " />
        <Text>
          영문,숫자,특수문자 중 2가지 이상의 문자조합 8-13자로 입력해주세요.
        </Text>
        <Input placeholder="비밀번호를 다시 한번 더 입력해주세요." />
      </Container>

      <Container>
        <Label>
          닉네임<span>*</span>
        </Label>
        <div>
          <SInput placeholder="사용하실 닉네임을 입력해주세요." />
          <CheckBtn>중복 확인</CheckBtn>
        </div>
        <Text>최대 5글자까지 허용 (특수문자는 사용하실 수 없습니다)</Text>
      </Container>

      <Button onClick={() => navigate("/joinend")}>가입완료</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
`;

const Container = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
  margin-bottom: 14px;

  span {
    color: #ff0000;
  }
`;

const SInput = styled.input`
  width: 642px;
  height: 42px;
  background-color: #3f424e;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  padding: 5px;
  margin-bottom: 15px;
  margin-right: 20px;

  &::placeholder {
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    padding: 5px;
  }
`;

const CheckBtn = styled.button`
  width: 180px;
  height: 42px;
  border: none;
  border-radius: 5px;
  background-color: #5263ff;
  color: #ffffff;
  margin-left: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 29px;
`;

const Input = styled.input`
  width: 866px;
  height: 42px;
  background-color: #3f424e;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  padding: 5px;
  margin-bottom: 15px;

  &::placeholder {
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    padding: 5px;
  }
`;

const Text = styled.div`
  color: #939393;
  font-size: 13px;
  font-weight: 400;
  line-height: 29px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 866px;
  height: 47px;
  border: none;
  border-radius: 6px;
  background-color: #5263ff;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  line-height: 29px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
