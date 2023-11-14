import useModal from "../../hooks/useModal";
import styled from "styled-components";
import MakeWork from "../../assets/Btn_mwork.png";
import LikeList from "./LikeList";

function MakeWorkbook() {
  const { isModalOpen, openModal, closeModal, Modal } = useModal();

  const handleModal = () => {
    openModal();
  };

  return (
    <>
      <Icon onClick={handleModal} src={MakeWork} alt="문제집 만들기" />

      {/* modal */}
      <Modal style={{ width: "650px", height: "690px" }}>
        <ModalContent>
          <Title>소밍밍님의 좋아요 내역</Title>
          <ModalBody>X 표시를 누르면 영구적으로 좋아요가 취소됩니다.</ModalBody>
          <Line />
          <LikeList />
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
  height: 100%;
  margin-top: 30px;
  
`;

const Title = styled.div`
  color: #6B7AFF;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 20px;
`;

const ModalBody = styled.div`
  display: flex;
  font-size: 14px;
  color:#939393;
`;

const Line = styled.hr`
  width: 566px;
  border: 1px solid #868686;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export default MakeWorkbook;