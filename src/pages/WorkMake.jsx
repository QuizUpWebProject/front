import styled from "styled-components";
import SelectCategory from "../components/studyroomMake/SelectCategory";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkMake = () => {
  const [category, setCategory] = useState("");
  const [workName, setworkName] = useState("");
  const [modal, setModal] = useState(null);
  const navigate = useNavigate();

  const handleWorkName = (event) => {
    const inputValue = event.target.value;
    setworkName(inputValue);
  };

  const handleCategory = (selectCategory) => {
    setCategory(selectCategory);
  }

  const handleCreateWork = () => {
    if (!category) {
      setModal('문제집 카테고리를 선택해주세요.');
    } else if (!/^[a-zA-Z0-9_@./-]+$/.test(workName)){
      setModal('사용 가능한 특수문자가 아닙니다.')
    } else if (workName.length > 20) {
      setModal('특수문자 포함 20자 이내로 작성해주세요.');
    } else {
      navigate("/front/:worklistid");
    }
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <Wrapper>
      <TopSection>
        <Title>문제집 만들기</Title>
        <PageInfo>
          CS면접 지식을 공유 할 수 있는 문제집이예요.<br/>
          문제집에서 제작된 문제들과 답변들은 공개 형식으로 다른 회원들이 문제와 답변을 공유 할 수 있습니다.
        </PageInfo>
      </TopSection>
      
      <div>
        <Container>
          <Labe1>
            문제집 카테고리<span>*</span>
          </Labe1>
          <SelectCategory
            onSelect={handleCategory}
          />
        </Container>
        <Container>
          <Labe1>
            문제집 제목<span>*</span>
          </Labe1>
          <NameInput
            placeholder="특수문자 포함 20자 이내로 작성해주세요."
            value={workName}
            onChange={handleWorkName}
          />
          <NameText>
            사용 가능한 특수문자는 (_/-/@/.)입니다. <br/>
            문제집 제목은 한번 입력한 경우 추후 수정이 불가능합니다. 신중히 생각 후 입력해주세요 :)
          </NameText>
        </Container>
      </div>

      <MakeBtn onClick={handleCreateWork}>문제집 만들기</MakeBtn>

      {modal && (
        <ModalContainer>
          <Background />
          <ModalContent>
            <ModalBody>{modal}</ModalBody>
            <Button onClick={closeModal}>확인</Button>
          </ModalContent>
        </ModalContainer>
      )}

    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 866px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 90px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #5263FF;
`;

const PageInfo = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 29px;
`;

const Container = styled.div`
  margin-bottom: 50px;
`;

const Labe1 = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;

  span {
    color: #ff0000;
  }
`;

const NameInput = styled.input`
  width: 100%;
  height: 42px;
  padding: 5px;
  background-color: #3f424e;
  border: none;
  border-radius: 6px;
  margin-right: 20px;
  margin-bottom: 25px;
  color: #ffffff;
`;

const NameText = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #939393;
`;

const MakeBtn = styled.button`
  width: 866px;
  height: 39px;
  border: none;
  border-radius: 6px;
  background-color: #5263ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 50px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
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

const ModalContent = styled.div`
  width: 400px;
  height: 220px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  font-size: 14px;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 13px;
  padding: 1.5rem;
  background-color: #262631;
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

export default WorkMake;