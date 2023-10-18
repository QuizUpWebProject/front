import { useState } from "react";
import styled from "styled-components";
import useModal from "../../hooks/useModal";

const CommentBox = ({commentData}) => {
    const [commentText, setCommentText] = useState('');
    const [charCount, setCharCount] = useState(0);
    // useModal 사용해서 글자수 제한 모달 구현
    const { isModalOpen, openModal, closeModal, Modal } = useModal();

    // 댓글 갯수
    const commentCount = commentData.length;

    // open modal
    const handleModal = (e) => {
        const text = e.target.value;
        if (text.length <= 1000 && !isModalOpen) {
            setCommentText(text);
            setCharCount(text.length);
        } else {
            setCommentText(text.slice(0,1000)); // 글자수 제한 초과 부분을 제외하고 저장
            setCharCount(10);
            openModal();
        }
    };

    // close modal
    const handelModalConfirm = () => {
        closeModal();
    }

    return (
        <CommentWrapper>
            <CommentCount>댓글 {commentCount}</CommentCount>
            <CommentContainer>
                <TextAreaContainer>
                    <CommentTextArea
                        placeholder="이 문제집에 대한 평가를 댓글로 남겨주세요."
                        value={commentText}
                        onChange={handleModal}
                        maxLength={1000}
                    />
                    <CharCount>{charCount} / 1000</CharCount>
                </TextAreaContainer>
                <SubmitButton>등록</SubmitButton>
            </CommentContainer>
            {/* modal */}
            <Modal style={{ width: "400px", height: "220px" }}>
                <ModalContent>
                    <div>
                        <ModalBody>제한된 글자수를 초과했습니다.</ModalBody>
                    </div>
                    <Button onClick={handelModalConfirm}>확인</Button>
                </ModalContent>
            </Modal>
        </CommentWrapper>
        
  );
};

const CommentWrapper = styled.div`
    padding: 16px;
    margin: 0 auto 40px;
    background-color: #3F424E;
    flex-direction: column;
    align-items: flex-start;
`;

const CommentCount = styled.div`
    margin-bottom: 11px;
    front-size: 15px;
`;

const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CommentTextArea = styled.textarea`
    padding: 8px;
    resize: none;
    background-color: #A7A7A7;
    color: black;
    font-size: 13.5px;
    border: 1px solid #A7A7A7;
    height: 57px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    overflow: hidden;
    outline: none;
    border: none;
`;

const CharCount = styled.div`
    text-align: right;
    color: #393939;
    padding: 0 15px;
    background-color: #A7A7A7;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;;
`;

const SubmitButton = styled.button`
    background-color: #007bff;
    font-size: 15px;
    color: black;
    border: none;
    padding: 10px 16px;
    cursor: pointer;
    background-color: #A7A7A7;
    margin-left: 11px;
    align-self: flex-end;
    border-radius: 6px;
    width: 91px;
    height: 91px;
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

export default CommentBox;