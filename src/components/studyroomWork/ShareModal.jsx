import ShareBtn from "../../assets/Btn_share.png";
import styled from "styled-components";
import useModal from "../../hooks/useModal";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ShareModal() {
  const { openModal, closeModal, Modal } = useModal();

  // open modal
  const handleModal = () => {
    openModal();
  };

  // window 객체에서 현재 url 가져오기
  const currentURL = window.location.href;

  // url 복사 후 닫기
  const handlerButton = () => {
    alert("복사되었습니다");
    closeModal();
  };

  return (
    <>
      <Img onClick={handleModal} src={ShareBtn} alt="outstudy" />

      {/* modal */}
      <Modal style={{ width: "400px", height: "220px" }}>
        <ModalContent>
          <div>
            <ModalBody>
              문제 공유하기 원하시면 하단의 복사 버튼을 누르세요 !
            </ModalBody>
          </div>
          <CopyToClipboard text={currentURL} onCopy={handlerButton}>
            <Button>URL 복사</Button>
          </CopyToClipboard>
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
