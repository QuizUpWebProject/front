import { useState } from "react";
import useModal from "../../hooks/useModal";
import styled from "styled-components";
import EditIcon from "../../assets/Btn_editIcon.png";

export default function EditUser() {
  const { openModal, closeModal, Modal } = useModal();
  const [modalContent, setModalContent] = useState("confirm");

  const handleModal = () => {
    openModal();
  };

  const handleChangeContent = () => {
    if (modalContent === "confirm") {
      setModalContent("other");
    } else {
      closeModal()
    }
  };

  return (
    <>
      <Icon onClick={handleModal} src={EditIcon} alt="edituser" />

      {/* modal */}
      <Modal  style={{ width: "400px", height: modalContent === "confirm" ? "264px" : "167px" }}>
        <ModalContent>
          <div>
            {/* 모달 내용 상태에 따라 다른 컨텐츠 렌더링 */}
            {modalContent === "confirm" ? (
              <>
                <Title>변경할 닉네임을 입력해주세요</Title>
                <ModalBody>최대 5글자까지 허용 (특수문자는 사용하실 수 없습니다)</ModalBody>
                <Input></Input>
                <Button onClick={handleChangeContent}>확인</Button>
              </>
            ) : (
              <>
                <ModalBody>닉네임이 변경되었습니다.</ModalBody>
                <Button onClick={handleChangeContent}>
                  확인
                </Button>
              </>
            )}
          </div>
          
        </ModalContent>
      </Modal>
    </>
  );
}

const Icon = styled.img`
  margin-left: 14px;
  font-size: 13px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 40px;
  font-size: 14px;
`;

const Title = styled.div`
  color: #C7C7C7;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: center;
`;

const ModalBody = styled.div`
  font-size: 10px;
  color:#939393;
  text-align: center;
`;

const Input = styled.input`
  margin-top: 30px;
  border: none;
  outline: none;
  font-size: 18px;
  width: 266px;
  height: 36px;
  padding: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: linear-gradient(to bottom, #636363, #6363634d);
`;

const Button = styled.button`
  width: 274px;
  height: 37px;
  background-color: #5263ff;
  font-size: 14px;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  margin-top: 34px;
`;