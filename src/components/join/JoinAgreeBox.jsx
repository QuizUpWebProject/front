import styled from "styled-components";
import CheckIcon from "../../assets/check_icon.png";
import CheckedIcon from "../../assets/check_ed_icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useModal from "../../hooks/useModal";

export default function JoinAgreeBox() {
  const [isChecked, setIsChecked] = useState(false);
  const { openModal, Modal, closeModal } = useModal();

  const handleCheckClick = () => {
    setIsChecked(!isChecked);
  };

  const handleNextClick = () => {
    if (isChecked) {
      navigate("/joinform");
    } else {
      openModal();
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Agree>
        상호명은 아래의 목적으로 개인정보를 수집 및 이용하며, 회원의 개인정보를
        안전하게 처리하는데 최선을 다하고 있습니다. <br />
        아래는 필수 항목으로 확인 후 동의해주세요.
      </Agree>

      <CheckContainer
        onClick={handleCheckClick}
        isChecked={isChecked} // isChecked 상태 전달
      >
        <CheckLabel>
          <Img
            src={isChecked ? CheckedIcon : CheckIcon}
            alt="check"
            isChecked={isChecked}
          />
          <Text>개인 정보 수집 및 이용 동의</Text> <span>(필수)</span>
        </CheckLabel>
      </CheckContainer>

      <div>
        <AgreeBox>
          <AgreeTitle>1. 수집 및 이용 목적</AgreeTitle>
          <AgreeText>-이용자 식별</AgreeText>
          <AgreeText> -서비스 이용 실적 정보 통계 및 분석</AgreeText>
        </AgreeBox>

        <AgreeBox>
          <AgreeTitle>2. 수집 항목</AgreeTitle>
          <AgreeText>-회원가입 시 이메일, 비밀번호, 닉네임</AgreeText>
        </AgreeBox>

        <AgreeBox>
          <AgreeTitle>3. 보유 및 이용 기간</AgreeTitle>
          <AgreeText>-탈퇴 요청 5일 후 지체없이 파기합니다</AgreeText>
          <AgreeText>
            *단, 관계 법령에 따라 일정 기간 보존해야 하는 경우 해당 기간 보관 후
            파기합니다.
          </AgreeText>
        </AgreeBox>

        <AgreeText>
          필수적인 개인정보 수집 및 이용에 동의하지 않을 권리가 있습니다. 다만,
          동의하지 않을 경우 서비스 이용이 제한됩니다.
        </AgreeText>
      </div>

      <Button onClick={handleNextClick}>다음</Button>

      {/* modal */}
      <Modal style={{ width: "400px", height: "220px" }}>
        <ModalContent>
          <div>
            <ModalBody>개인정보 수집 및 이용동의는 필수입니다.</ModalBody>
          </div>
          <ModalButton onClick={closeModal}>확인</ModalButton>
        </ModalContent>
      </Modal>
    </>
  );
}

const Agree = styled.div`
  margin-top: 60px;
  font-size: 15px;
  font-weight: 500;
  line-height: 29px;
  margin-bottom: 20px;
`;

const CheckContainer = styled.button`
  font-size: 15px;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isChecked ? "#5263ff" : "inherit")};
`;

const Img = styled.img`
  margin-right: 10px;
`;

const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${(props) => (props.isChecked ? "#5263ff" : "inherit")};

  span {
    color: #ff3333;
  }

  margin-bottom: 20px;
`;

const Text = styled.div`
  color: ${(props) => (props.isChecked ? "#5263ff" : "inherit")};
  margin-right: 15px;
`;

const AgreeBox = styled.div`
  margin-bottom: 30px;
`;

const AgreeTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 29px;
  color: #f0f0f0;
`;

const AgreeText = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 29px;
  color: #cdcdcd;
`;

const Button = styled.button`
  margin-top: 40px;
  margin-bottom: 60px;
  width: 866px;
  height: 47px;
  border: none;
  border-radius: 6px;
  background-color: #5263ff;
  color: #ffffff;
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

const ModalButton = styled.button`
  width: 301px;
  height: 37px;
  background-color: #5263ff;
  font-size: 14px;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
`;
