import PlusBtn from "../../assets/Btn_plus.png";
import styled from "styled-components";
import useModal from "../../hooks/useModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlusModal() {
  const { openModal, Modal } = useModal();
  const navigate = useNavigate();

  // 모달 내용 변경하기 (추가 클릭 시 추가되었다는 내용으로 변경)
  const [modalContent, setModalContent] = useState("confirm");

  // 모달 내용 변경 함수
  const handleChangeContent = () => {
    if (modalContent === "confirm") {
      setModalContent("other");
    } else {
      //나의 문제집으로 이동할 url로 수정 예정
      navigate("/");
    }
  };

  // open modal
  const handleModal = () => {
    openModal();
  };

  return (
    <>
      <Img src={PlusBtn} alt="plus" onClick={handleModal} />

      {/* modal */}
      <Modal style={{ width: "400px", height: "220px" }}>
        <ModalContent>
          <div>
            {/* 모달 내용 상태에 따라 다른 컨텐츠 렌더링 */}
            {modalContent === "confirm" ? (
              <>
                <ModalBody>나의 문제집에 추가하시겠습니까?</ModalBody>
                <Button onClick={handleChangeContent}>추가하기</Button>
              </>
            ) : (
              <>
                <ModalBody>나의 문제집에 추가되었습니다. </ModalBody>
                <Button onClick={handleChangeContent}>
                  나의 문제집으로 이동하기
                </Button>
              </>
            )}
          </div>
          {/* <Button>추가하기</Button> */}
        </ModalContent>
      </Modal>
    </>
  );
}

const Img = styled.img`
  margin-right: 10px;
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

const Button = styled.button`
  width: 301px;
  height: 37px;
  background-color: #5263ff;
  font-size: 14px;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
`;
