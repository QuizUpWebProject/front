import useModal from "../../hooks/useModal";
import styled from "styled-components";
import CmtList from "./CmtList";
import BtnCmt from '../../assets/Comment_box.png';

function CmtModal() {
  const { openModal, Modal } = useModal();

  const handleModal = () => {
    openModal();
  }; 

  return (
    <>
      <Container>
        <Icon onClick={handleModal} src={BtnCmt} alt="LikeList" />
        <Cmt>댓글</Cmt>
        <Num>14개</Num>
      </Container>
      
      {/* modal */}
      <Modal style={{ width: "650px", height: "690px" }}>
        <ModalContent>
          <Title>소밍밍님의 댓글 내역</Title>
          <ModalBody>X 표시를 누르면 영구적으로 좋아요가 취소됩니다.</ModalBody>
          <Line />
          <CmtList />
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

const Cmt = styled.div`
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

export default CmtModal;