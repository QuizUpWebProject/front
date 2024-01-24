import styled from "styled-components";
import useModal from "../../hooks/useModal";
import { useState } from "react";
import HelpIcon from "../../assets/help.png";
import GoodEmotion from "../../assets/Emotion_1.png";
import SosoEmotion from "../../assets/Emotion_2.png";
import BadEmotion from "../../assets/Emotion_3.png";

export default function EvaluationModal() {
  const { openModal, closeModal, Modal } = useModal();

  // open modal
  const handleModal = () => {
    openModal();
  };

  // close modal
  const handleClose = () => {
    closeModal();
  };

  // helpicon hover 시 나오는 문구
  const [showToolTip, setToolTip] = useState(false);

  const toggleToolTip = () => {
    setToolTip(!showToolTip);
  };

  return (
    <>
      <Button onClick={handleModal}>
        문제 평가하기
        {/* Hover 이벤트 (helpicon hover 시 나오는 안내 문구) */}
        <HelpIconWrapper
          onMouseEnter={toggleToolTip}
          onMouseLeave={toggleToolTip}
        >
          <Img src={HelpIcon} alt="help" />
          {showToolTip && (
            <Tooltip>
              현재 학습한 문제의 학습 이해도를 평가해주세요. 기준에 따라 다시
              학습 가능합니다.
            </Tooltip>
          )}
        </HelpIconWrapper>
      </Button>

      {/* modal */}
      <Modal style={{ width: "650px", height: "658px" }}>
        <ModalContent>
          <div>
            <Title>문제 평가하기</Title>
            <Line></Line>
            <ModalBody>
              현재 학습한 문제의 학습 이해도를 평가해주세요.
              <br />
              이해도의 기준은 이해완료, 애매해요, 잘몰라요 총 3가지로 분류되며
              <br /> 완전히 이해하지 못한 문제들을 기준에 따라 다시 해당 기준의
              문제만 학습할 수 있습니다.
            </ModalBody>

            <EvalContainer>
              <EvalBtn>
                <EvalImg src={GoodEmotion} alt="good" />
                <EvalText>이해완료</EvalText>
              </EvalBtn>
              <EvalBtn>
                <EvalImg src={SosoEmotion} alt="soso" />
                <EvalText>애매해요</EvalText>
              </EvalBtn>
              <EvalBtn>
                <EvalImg src={BadEmotion} alt="bad" />
                <EvalText>잘몰라요</EvalText>
              </EvalBtn>
            </EvalContainer>

            <BackBtn onClick={handleClose}>목록으로 이동하기</BackBtn>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}

const Button = styled.button`
  width: 513px;
  height: 46px;
  background-color: #5263ff;
  border: none;
  border-radius: 6px;
  color: #d1d1d1;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 70px;
`;

const Img = styled.img`
  margin-left: 10px;
  width: 17px;
  height: 17px;
`;

const HelpIconWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const Tooltip = styled.div`
  background-color: #3f424e;
  border: none;
  color: #d1d1d1;
  font-size: 12px;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  position: absolute;
  bottom: calc(100% + 6.8px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: 500px;

  &::after {
    background-color: #3f424e;
    content: "";
    display: block;
    left: 75px;
    position: absolute;
    top: -7px;
    width: 100%;
    z-index: 1;
  }

  &::before {
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 75px;
    position: absolute;
    top: -8px;
    width: 100%;
    z-index: 0;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  height: 100%;
  margin-top: 100px;
  font-size: 14px;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
  color: #c7c7c7;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 30px;
  text-align: left;
`;

const Title = styled.div`
  color: #6b7aff;
  font-size: 20px;
  font-weight: 600;
`;

const Line = styled.div`
  width: 566px;
  border: 1px solid #c7c7c7;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const EvalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EvalBtn = styled.button`
  background-image: linear-gradient(to top, #636363 100%, #636363 30%);
  width: 152px;
  height: 172px;
  border: none;
  border-radius: 23px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EvalImg = styled.img`
  width: 56px;
  height: 56px;
  margin-top: 30px;
`;

const EvalText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #f0eeee;
  margin-top: 20px;
`;

const BackBtn = styled.button`
  width: 566px;
  height: 37px;
  background-color: #3f424e;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  margin-top: 40px;
`;
