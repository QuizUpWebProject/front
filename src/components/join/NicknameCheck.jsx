import { useState } from "react";
import styled from "styled-components";
import useModal from "../../hooks/useModal";
import axios from "axios";

export default function NicknameCheck({ nickname, setNickname }) {
  const { openModal, Modal, closeModal } = useModal();

  // 아이디 중복 확인
  const nicknameRegex = /^[a-zA-Z0-9]{1,5}$/;
  const [isValid, setIsValid] = useState(true); // 유효성 검사

  const handleNickname = async () => {
    const checkedNickname = nicknameRegex.test(nickname); // 유효성 검사한 닉네임

    setIsValid(checkedNickname);

    if (!nicknameRegex.test(nickname)) {
      openModal();
    } else {
      try {
        const response = await axios.get(`/joinform/api/signup/nicknamecheck`, {
          params: { nickname: nickname },
        });

        if (response.status === 200) {
          alert("확인되었습니다.");
        } else if (response.status === 400) {
          openModal();
        }
      } catch (error) {
        console.error("Error checking nickname:", error);
        openModal();
      }
    }
  };

  return (
    <>
      <Container>
        <Label>
          아이디<span>*</span>
        </Label>
        <div>
          <SInput
            placeholder="이메일을 입력해주세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <CheckBtn onClick={handleNickname}>중복 확인</CheckBtn>
        </div>
        <Text
          style={{
            color: isValid ? "#939393" : "#ff0000",
          }}
        >
          최대 5글자까지 허용 (특수문자는 사용하실 수 없습니다)
        </Text>
      </Container>

      {/* 아이디 중복 확인 modal */}
      <Modal style={{ width: "400px", height: "220px" }}>
        <ModalContent>
          <div>
            <ModalBody>
              {isValid
                ? "닉네임이 중복됩니다. 다른 닉네임을 입력해주세요."
                : "잘못된 형식의 닉네임입니다."}
            </ModalBody>
          </div>
          <ModalButton onClick={closeModal}>확인</ModalButton>
        </ModalContent>
      </Modal>
    </>
  );
}

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

const Text = styled.div`
  color: #939393;
  font-size: 13px;
  font-weight: 400;
  line-height: 29px;
  margin-bottom: 15px;
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
