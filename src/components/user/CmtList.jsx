import { useState } from "react";
import styled from "styled-components";
import CmtItem from "./CmtItem";
import usePagination from "../../hooks/usePagination";
import LeftIcon from "../../assets/left.png";
import RightIcon from "../../assets/right.png";
 
export default function CmtList() {
  // 임시 댓글 내역 data 
  const cmtData = [
    {id: 1, title: "문제집이 너무 좋아요 ~ 잘 학습하고 갑니다!", date: "2023-10-15"},
    {id: 2, title: "문제집이 너무 좋아요 ~ 잘 학습하고 갑니다!", date: "2023-10-15"},
    {id: 3, title: "문제집이 너무 좋아요 ~ 잘 학습하고 갑니다!", date: "2023-10-15"},
    {id: 4, title: "문제집이 너무 좋아요 ~ 잘 학습하고 갑니다!", date: "2023-10-15"},
    {id: 5, title: "문제집이 너무 좋아요 ~ 잘 학습하고 갑니다!", date: "2023-10-15"},
    {id: 6, title: "문제집이 너무 좋아요 ~ 잘 학습하고 갑니다!", date: "2023-10-15"},
    {id: 7, title: "문제집이 너무 좋아요 ~ 잘 학습하고 갑니다!", date: "2023-10-15"},
    {id: 8, title: "문제집이 너무 좋아요 ~ 잘 학습하고 갑니다!", date: "2023-10-15"},
  ];
  const [data, setData] = useState(cmtData); // 데이터 상태 정의

  const itemsPerPage = 10; // 페이지 당 보여줄 아이템 수
  const {
    currentPage,
    currentItems,
    totalPages,
    paginate,
    goToPrevPage,
    goToNextPage,
  } = usePagination(
    data, // 데이터를 frontData로 변경
    itemsPerPage
  );

  const removeItem = (itemId) => {
    const updatedItems = data.filter((item) => item.id !== itemId);
    setData(updatedItems);
  };

  return(
    <Container>
      {/* 현재 페이지의 아이템 렌더링 */}
      {currentItems.map((front) => (
        <CmtItem key={front.id} item={front} onRemove={removeItem}/>
      ))}

      {/* 페이지네이션 컴포넌트 렌더링 */}
      <PaginationContainer>
          <PaginationButton onClick={goToPrevPage}>
            <img src={LeftIcon} alt="left" />
          </PaginationButton>
          {Array.from({ length: totalPages }).map((_, index) => (
            <PageButton
              key={index}
              onClick={() => paginate(index + 1)}
              isSelected={index + 1 === currentPage}
            >
              {index + 1}
            </PageButton>
          ))}
          <PaginationButton onClick={goToNextPage}>
            <img src={RightIcon} alt="right" />
          </PaginationButton>
      </PaginationContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 566px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;

const PaginationButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin: 0 5px;
`;

const PageButton = styled.button`
  border: none;
  margin: 10px;
  background-color: transparent;
  color: ${(props) => (props.isSelected ? "#5263ff" : "#838383")};
  font-size: 15px;
`;