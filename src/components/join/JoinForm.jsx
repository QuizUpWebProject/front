import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EmailCheck from "./EmailCheck";
import NicknameCheck from "./NicknameCheck";
import useModal from "../../hooks/useModal";
import PasswordForm from "./PasswordForm";
import axios from "axios";

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

  // 회원가입 완료
  const handleJoinBtn = async () => {
    if (isAnyFieldEmpty) {
      openModal();
    } else {
      try {
        const response = await axios.post(`/joinform/api/signup`, {
          usermail: email,
          password: password,
          nickname: nickname,
        });

        if (response.status === 200 && response.data.code === 200) {
          navigate("/joinend");
        } else {
          console.error("signup error: ", response.data.message);
        }
      } catch (error) {
        console.error("error message: ", error);
      }
    }
  };

  return (
    <Wrapper>
      <EmailCheck email={email} setEmail={setEmail} />

      <PasswordForm
        password={password}
        passwordConfirm={passwordConfirm}
        onPasswordChange={setPassword}
        onPasswordConfirmChange={setpasswordConfirm}
        onBlur={handleCheckPassword}
        isValid={isValid}
        isError={isError}
      />

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
