import useModal from "../../hooks/useModal";
import styled from "styled-components";
import OutIcon from "../../assets/Btn_out.png";
import { useNavigate } from "react-router-dom";

export default function OutStudy() {
  // useModal 사용해서 그룹방 탈퇴 모달 구현
  const { isModalOpen, openModal, closeModal, Modal } = useModal();

  // open modal
  const handleModal = () => {
    openModal();
  };

  // 탈퇴하기 클릭 후 스터디방 메인으로 이동
  const navigate = useNavigate();

  const outStudyBtn = () => {
    navigate("/study");
    // 탈퇴 완료 후 스터디방 목록에서 제거하는 기능 구현 예쩡
  };

  return (
    <>
      <Icon onClick={handleModal} src={OutIcon} alt="outstudy" />

      {/* modal */}
      <Modal style={{ width: "400px", height: "220px" }}>
        <ModalContent>
          <div>
            <ModalBody>해당 스터디방을 탈퇴하시겠습니까?</ModalBody>
          </div>
          <Button onClick={outStudyBtn}>탈퇴하기</Button>
        </ModalContent>
      </Modal>
    </>
  );
}

const Icon = styled.img`
  margin-right: 10px;
  font-size: 13px;
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
