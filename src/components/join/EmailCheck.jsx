import { useState } from "react";
import styled from "styled-components";
import useModal from "../../hooks/useModal";
import axios from "axios";

export default function EmailCheck({ email, setEmail }) {
  const { openModal, Modal, closeModal } = useModal();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // 이메일 조건
  const [isValid, setIsValid] = useState(true); // 유효성 검사
  const [isDuplicate, setIsDuplicate] = useState(true); // 중복 검사

  const handleCheckEmail = async () => {
    const isValidCheck = emailRegex.test(email);
    setIsValid(isValidCheck); // 유효성 검사 통과

    if (!emailRegex.test(email)) {
      openModal();
      return;
    }

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/joinform/api/signup/mailcheck`,
        {
          params: { mail: email },
        }
      );

      if (response.status === 200) {
        if (response.data.code === 200) {
          // 중복 이메일 없을 때
          setIsDuplicate(true);
          openModal();
        } else if (response.data.code === 400) {
          // 중복 이메일이 존재할 때
          setIsDuplicate(false);
          openModal();
        }
      }
    } catch (error) {
      console.error("error: ", error);
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <CheckBtn onClick={handleCheckEmail}>중복 확인</CheckBtn>
        </div>
        <Text
          style={{
            color: isValid ? "#939393" : "#ff0000",
          }}
        >
          사용 가능한 특수문자는 (_/-/@/.)입니다.
        </Text>
      </Container>

      {/* 아이디 중복 확인 modal */}
      <Modal style={{ width: "400px", height: "220px" }}>
        <ModalContent>
          <div>
            <ModalBody>
              {isValid
                ? isDuplicate
                  ? "확인되었습니다"
                  : "중복된 이메일이 존재합니다"
                : "이메일 형식이 올바르지 않습니다."}
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
