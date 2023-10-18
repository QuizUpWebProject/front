import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EmailCheck from "./EmailCheck";
import NicknameCheck from "./NicknameCheck";
import useModal from "../../hooks/useModal";

export default function JoinForm() {
  const navigate = useNavigate();
  const { openModal, Modal, closeModal } = useModal();

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");

  // 비밀번호 확인
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [isValid, setIsValid] = useState(true); // 비밀번호 유효성 검사
  const [isError, setIsError] = useState(false); // 비밀번호 확인 후 안내 message
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d|[\W_]).{8,13}$/;

  const isAnyFieldEmpty = !email || !password || !passwordConfirm || !nickname;

  const handleCheckPassword = () => {
    const isPasswordValid = passwordRegex.test(password);
    const passwordsMatch = password === passwordConfirm;

    setIsValid(isPasswordValid);

    if (!passwordsMatch) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const handleJoinBtn = () => {
    if (isAnyFieldEmpty) {
      openModal();
    } else {
      navigate("/joinend");
    }
  };

  return (
    <Wrapper>
      <EmailCheck email={email} setEmail={setEmail} />

      <Container>
        <Label>
          비밀번호<span>*</span>
        </Label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요. "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Text
          style={{
            color: isValid ? "#939393" : "#ff0000",
          }}
        >
          영문,숫자,특수문자 중 2가지 이상의 문자조합 8-13자로 입력해주세요.
        </Text>
        <Input
          type="password"
          placeholder="비밀번호를 다시 한번 더 입력해주세요."
          value={passwordConfirm}
          onChange={(e) => setpasswordConfirm(e.target.value)}
          onBlur={handleCheckPassword}
        />
        {isError && (
          <PasswordMisMatch>비밀번호가 일치하지 않습니다.</PasswordMisMatch>
        )}
      </Container>

      <NicknameCheck nickname={nickname} setNickname={setNickname} />

      <Button onClick={handleJoinBtn}>가입완료</Button>

      <Modal style={{ width: "400px", height: "220px" }}>
        <ModalContent>
          <div>
            <ModalBody>모두 입력하지 않았습니다.</ModalBody>
          </div>
          <ModalButton onClick={closeModal}>확인</ModalButton>
        </ModalContent>
      </Modal>
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

const PasswordMisMatch = styled.div`
  color: #ff0000;
  font-weight: 600;
  font-size: 14px;
  margin-top: 10px;
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

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 60px;
  font-size: 14px;
  text-align: center;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
  color: #c7c7c7;
  text-align: center;
  margin-bottom: 30px;
`;

const ModalButton = styled.button`
  width: 301px;
  height: 37px;
  background-color: #5263ff;
  font-size: 14px;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
`;
