import styled from "styled-components";
import UserIcon from "../../assets/people.png";
import GroupIcon from "../../assets/group.png";
import LockIcon from "../../assets/lock.png";
import JoinBtn from "../../assets/Btn_join.png";
import { useNavigate } from "react-router-dom";
import useModal from "../../hooks/useModal";
import { useState } from "react";

export default function StudyItem() {
  const navigate = useNavigate();

  // 모달 custom hook 사용
  const { isModalOpen, openModal, closeModal, Modal } = useModal();

  // open modal
  const handleModal = () => {
    openModal();
  };

  return (
    <Container>
      <div>프론트엔드</div>
      <Title onClick={() => navigate("/study/:studyroomid")}>
        스터디방명 이름 예시 스터디방명 이름 예시
      </Title>
      <div>
        <Icon src={UserIcon} alt="작성자" />
        소밍밍
      </div>
      <div>
        <Icon src={GroupIcon} alt="인원" />
        21/50
      </div>
      <div>
        <Icon src={LockIcon} alt="비공개" />
        비공개
      </div>
      <img src={JoinBtn} alt="가입하기" onClick={handleModal} />

      {/* 비공개 모달로 우선 구현 (추후 공개 modal 추가 예정) */}
      <Modal style={{ width: "400px", height: "220px" }}>
        <ModalContent>
          <div>
            <ModalBody>
              이 스터디방은 비공개입니다. 가입코드를 입력해주세요.
            </ModalBody>
            <CodeInput type="password" maxLength="4" placeholder="* * * *" />
          </div>
        </ModalContent>
      </Modal>
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

  &:hover {
    color: #5263ff;
  }
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
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
`;

const CodeInput = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  width: 266px;
  height: 37px;
  padding: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: linear-gradient(to bottom, #636363, #6363634d);

  &::placeholder {
    color: #acacac;
    font-size: 18px;
  }
`;
