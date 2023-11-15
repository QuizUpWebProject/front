import { useState } from "react";
import styled from "styled-components";
import LikeItem from "./LikeItem";
import usePagination from "../../hooks/usePagination";
import LeftIcon from "../../assets/left.png";
import RightIcon from "../../assets/right.png";
 
export default function LikeList() {
  // 임시 좋아요 내역 data 
  const likeData = [
    {id: 1, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-15", user: "소밍밍", like: 10, cmt: 5},
    {id: 2, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-14", user: "소밍밍", like: 2, cmt: 5},
    {id: 3, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-13", user: "소밍밍", like: 0, cmt: 5},
    {id: 4, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-12", user: "소밍밍", like: 1, cmt: 10},
    {id: 5, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-11", user: "소밍밍", like: 15, cmt: 11},
    {id: 6, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-10", user: "소밍밍", like: 12, cmt: 14},
    {id: 7, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-09", user: "소밍밍", like: 11, cmt: 18},
    {id: 8, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-08", user: "소밍밍", like: 9, cmt: 31},
    {id: 9, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-07", user: "소밍밍", like: 19, cmt: 11},
    {id: 10, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-06", user: "소밍밍", like: 30, cmt: 10},
    {id: 11, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-05", user: "소밍밍", like: 5, cmt: 9},
    {id: 12, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-04", user: "소밍밍", like: 6, cmt: 8},
    {id: 13, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-03", user: "소밍밍", like: 0, cmt: 0},
    {id: 14, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-02", user: "소밍밍", like: 11, cmt: 1},
    {id: 15, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-01", user: "소밍밍", like: 10, cmt: 3},
    {id: 16, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-09-30", user: "소밍밍", like: 10, cmt: 5},
    {id: 17, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-09-29", user: "소밍밍", like: 10, cmt: 15},
    {id: 18, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-09-28", user: "소밍밍", like: 10, cmt: 50},
    {id: 19, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-09-27", user: "소밍밍", like: 10, cmt: 11},
  ];
  const [data, setData] = useState(likeData); // 데이터 상태 정의

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
        <LikeItem key={front.id} item={front} onRemove={removeItem}/>
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