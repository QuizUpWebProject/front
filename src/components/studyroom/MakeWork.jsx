import useModal from "../../hooks/useModal";
import styled from "styled-components";
import MakeIcon from "../../assets/Btn_work.png";
import { useState } from "react";

export default function MakeWork() {
  // useModal 사용해서 문제 만들기 모달 구현
  const { isModalOpen, openModal, closeModal, Modal } = useModal();

  // open modal
  const handleModal = () => {
    openModal();
  };

  // 문제/답안 입력하는 상태 변수
  const [work, setWork] = useState("");
  const [answer, setAnswer] = useState("");

  // 포커스 상태 변수
  const [isWorkFocused, setWorkFocused] = useState(false);
  const [isAnswerFocused, setAnswerFocused] = useState(false);

  // 문제 등록 버튼
  const handleMakeWork = () => {
    if (work === "" || answer === "") {
      alert("문제와 답안을 모두 입력해주세요.");
    } else {
      // 문제와 답안이 모두 입력된 후 모달 닫히고, 문제 추가 되는 기능 구현
      closeModal();
    }
  };

  return (
    <>
      <Icon onClick={handleModal} src={MakeIcon} alt="makework" />

      {/* modal */}
      <Modal style={{ width: "650px", height: "660px" }}>
        <ModalContent>
          <div>
            <Title>문제 만들기</Title>
            <Line></Line>
            <Label>
              문제<span>*</span>
            </Label>
            <Textarea
              placeholder="문제를 입력해주세요."
              value={work}
              onChange={(e) => setWork(e.target.value)}
              onFocus={() => setWorkFocused(true)}
              onBlur={() => setWorkFocused(false)}
            />
            <Label>
              답안<span>*</span>
            </Label>
            <Textarea
              placeholder="나의 모범답안을 입력해주세요."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onFocus={() => setAnswerFocused(true)}
              onBlur={() => setAnswerFocused(false)}
            />
            <Button onClick={handleMakeWork}>문제 등록</Button>
          </div>
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
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  margin-top: 60px;
  font-size: 14px;
  margin-left: 40px;
`;

const Title = styled.div`
  color: #6b7aff;
  font-size: 20px;
  font-weight: 600;
`;

const Line = styled.div`
  width: 566px;
  border: 1px solid #c7c7c7;
  margin-top: 15px;
`;

const Label = styled.div`
  color: #ffffff;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;

  span {
    color: #ff0000;
  }
`;

const Textarea = styled.textarea`
  background-color: #3f424e;
  width: 566px;
  height: 147px;
  border: none;
  border-radius: 6px;
  color: #efeeee;
  padding: 10px;

  &::placeholder {
    color: #efeeee;
    padding: 10px;
  }
`;

const Button = styled.button`
  width: 566px;
  height: 37px;
  background-color: #5263ff;
  font-size: 14px;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  margin-top: 45px;
`;
