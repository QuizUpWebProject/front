import { useState, useEffect } from "react";
import styled from "styled-components";
import FrontItem from "./FrontItem";
import SearchBar from "./SearchBar";
import usePagination from "../../hooks/usePagination";
import LeftIcon from "../../assets/left.png";
import RightIcon from "../../assets/right.png";
import axios from 'axios';

export default function FrontList({ standardEnum, handleSort }) {
  const [data, setData] = useState([]); // 데이터 상태 정의

  // API 호출 함수 정의
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/problem/api/getlist`, 
        {
        pageNumber: currentPage,
        pageSize: itemsPerPage,
        category: 'front',
        standardEnum: standardEnum, // standardEnum 값 추가
      });
      setData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [standardEnum]);

  const handleSortClick = (enumValue) => {
    handleSort(enumValue);
  };

  const itemsPerPage = 15; // 페이지 당 보여줄 아이템 수
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


  return(
    <div>
      <Container>
        <SortOptions>
          <SortButton onClick={() => handleSortClick('LATEST')}>
            최신순
          </SortButton>
          <SortButton onClick={() => handleSortClick('OLDEST')}>
            등록순
          </SortButton>
          <SortButton onClick={() => handleSortClick('RECOMMEND')}>
            추천순
          </SortButton>
          <SortButton onClick={() => handleSortClick('VIEW')}>
            댓글순
          </SortButton>
        </SortOptions>

        <SearchBar />
      </Container>

      {/* 필터링된 프론트 문제집 리스트 표시 */}
      <table>
        <tbody>
          {/* 현재 페이지의 아이템 렌더링 */}
          {currentItems.map((front, index) => (
            <FrontItem key={front.id} item={front} index={index}/>
          ))}
        </tbody>

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
      </table>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SortOptions = styled.div`
  align-items: center;
  display: flex;
  padding: 5px 0;
`;

const SortButton = styled.button`
  margin-right: 15spx;
  background-color: transparent;
  color: ${(props) => (props.active ? '#FFFFFF' : '#838383')};
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 50px;
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