import { useState } from "react";
import styled from "styled-components";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // modal open
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // modal close
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  // modal component
  const Modal = ({ children, style }) => {
    return isModalOpen ? (
      <Container>
        <Background onClick={closeModal} />
        <ModalBlock onClick={(e) => e.stopPropagation()} style={style}>
          <Close onClick={closeModal}>x</Close>
          <Contents>{children}</Contents>
        </ModalBlock>
      </Container>
    ) : null;
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    Modal,
  };
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
`;

const ModalBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 13px;
  padding: 1.5rem;
  background-color: #262631;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Close = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  outline: none;
  color: #fff;
  background-color: transparent;
  font-size: 18px;
  text-align: right;
  margin: 10px;
  margin-bottom: 25px;
`;
