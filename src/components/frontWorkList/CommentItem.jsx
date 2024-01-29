import styled from "styled-components";
import UserIcon from "../../assets/people.png";
import LikeIcon from "../../assets/heart.png";
import useModal from "../../hooks/useModal";

const CommentItem = ({ item }) => {
    const { openModal,closeModal, Modal } = useModal();

    // open modal
    const handleModal = () => {
      openModal();
    };

    const handlerButton = () => {
        closeModal();
      };

    return (
        <Wrapper>
            <Name>
                <Icon src={UserIcon} alt="작성자" /> {item.user}
            </Name>
            <Content>{item.content}</Content>
            <Container>
                <Date>{item.date}</Date>
                <Like>
                    <Icon src={LikeIcon} alt="추천" onClick={handleModal}/> {item.like}
                </Like>

                {/* modal */}
                <Modal style={{ width: "400px", height: "220px" }}>
                    <ModalContent>
                        <ModalBody>
                        본인의 댓글을 추천 할 수 없습니다.
                        </ModalBody>
                        <Button onClick={handlerButton}>확인</Button>
                    </ModalContent>
                </Modal>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: transparent;
    border-color: #868686 transparent;
    border-style: solid;
    border-width: 1px 0;
    padding: 17px;

    &:not(:first-child) {
        margin-top: -1px; // 첫 번째 div는 마진을 설정 안함
    }
`;

const Name = styled.div`
    display: flex;
    align-items: center; 
`;

const Content = styled.div`
    padding: 14px 24px 7px;
`;

const Date = styled.div`
    padding: 7px 24px;
`;

const Like = styled.div`
    display: flex;
    align-items: center; 
    background-color: #3F424E;
    border-radius: 6px;
    padding: 8px;
    cursor: pointer;
`;

const Icon = styled.img`
    margin-right: 8px; 
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
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

export default CommentItem;