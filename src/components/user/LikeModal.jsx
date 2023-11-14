import useModal from "../../hooks/useModal";
import styled from "styled-components";
import LikeList from "./LikeList";
import BtnLike from "../../assets/heart_checked_box.png";

function LikeModal() {
  const { openModal, Modal } = useModal();

  const handleModal = () => {
    openModal();
  }; 

  return (
    <>
      <Container>
        <Icon onClick={handleModal} src={BtnLike} alt="LikeList" />
        <Like>좋아요</Like>
        <Num>17개</Num>
      </Container>
      
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Icon = styled.img`
  cursor: pointer;
`;

const Like = styled.div`
  font-size: 16px;
`;

const Num = styled.div`
  font-size: 16px;
  color: #828282;
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

export default LikeModal;