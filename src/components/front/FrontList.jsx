import { useState, useEffect } from "react";
import styled from "styled-components";
import FrontItem from "./FrontItem";
import SearchBar from "./SearchBar";
import usePagination from "../../hooks/usePagination";
import LeftIcon from "../../assets/left.png";
import RightIcon from "../../assets/right.png";

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].id !== arr2[i].id) {
      return false;
    }
  }

  return true;
}

export default function FrontList() {
  // 임시 프론트 문제집 data 
  const frontData = [
    {id: 1, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-15", user: "소밍밍", like: 10, cmt: 5},
    {id: 2, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-14", user: "소밍밍", like: 2, cmt: 5},
    {id: 3, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-13", user: "소밍밍", like: 0, cmt: 5},
    {id: 4, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-12", user: "소밍밍", like: 1, cmt: 10},
    {id: 5, title: "정보처리기사실기_2023정보처리기사실기_2023", date: "2023-10-11", user: "소밍밍", like: 15, cmt: 11},
  ];
  const [sortOption, setSortOption] = useState('latest'); // 초기 정렬 기준 : 최신순
  const [data, setData] = useState(frontData); // 데이터 상태 정의

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

  useEffect(() => {
    // 문제집 리스트 정렬
    const sortData = (sortKey) => {
      const sortedData = [...data]; // 원본 데이터를 변경하지 않기 위해 복사

      if (sortKey === 'latest') {
        sortedData.sort((a, b) => new Date(b.date) - new Date(a.date)); // 최신순
      } else if (sortKey === 'oldest') {
        sortedData.sort((a, b) => new Date(a.date) - new Date(b.date)); // 등록순
      } else if (sortKey === 'highestRated') {
        sortedData.sort((a, b) => b.like - a.like);                     // 평점 높은순
      } else if (sortKey === 'mostCommented') {
        sortedData.sort((a, b) => b.cmt - a.cmt);                       // 댓글순
      }

      return sortedData;
    };
    const sortedData = sortData(sortOption);
    // 정렬된 데이터와 현재 데이터가 다를 경우에만 업데이트
    if (!isEqual(sortedData, data)) {
      setData(sortedData);
    }
  }, [sortOption, data]);

  return(
    <div>
      <Container>
        <SortOptions>
          <SortButton
            onClick={() => setSortOption('latest')}
            active={sortOption === 'latest'}
          >
            최신순
          </SortButton>
          <SortButton
            onClick={() => setSortOption('oldest')}
            active={sortOption === 'oldest'}
          >
            등록순
          </SortButton>
          <SortButton
            onClick={() => setSortOption('highestRated')}
            active={sortOption === 'highestRated'}
          >
            추천순
          </SortButton>
          <SortButton
            onClick={() => setSortOption('mostCommented')}
            active={sortOption === 'mostCommented'}
          >
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