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
  const [searchResults, setSearchResults] = useState([]); // 검색 결과
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // 페이지 당 보여줄 아이템 수
  const {
    currentItems,
    totalPages,
    paginate,
    goToPrevPage,
    goToNextPage,
  } = usePagination(
    searchResults.length > 0 ? searchResults : data, // 데이터를 frontData로 변경
    itemsPerPage, currentPage
  );

  useEffect(() => {
    // API 호출 함수 정의
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/problem/api/getlist`,
          {
            params: {
              pageNumber: currentPage,
              pageSize: itemsPerPage,
              category: "front",
              standardEnum: standardEnum
            }
          });

        if (response.status === 200 && response.data.code === 200) {
          const responseData = response.data.result;
          if (responseData && responseData !== null) {
            setData(responseData);
          } else {
            setData([]); // 결과가 없으면 빈 배열로 초기화
          }
        } else {
          console.error("frontlist error: ", response.data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };  

    fetchData();
  }, [currentPage, itemsPerPage, standardEnum]);

  const handleSearch = async (word, searchType) => {
    try {
      let url = '';
      if (searchType === '제목') {
        url = `${process.env.REACT_APP_API_BASE_URL}/problem/api/searchproblemlisttitle`;
      } else if (searchType === '닉네임') {
        url = `${process.env.REACT_APP_API_BASE_URL}/problem/api/searchproblemlistuserid`;
      }

      const response = await axios.get(url, {
        params: {
          pageNumber: 1,
          pageSize: itemsPerPage,
          word: word,
          problemListStandardEnum: standardEnum,
        }
      });
      setSearchResults(response.data.result || []);
      setCurrentPage(1); // 검색 결과를 받으면 페이지를 첫 페이지로 초기화
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return(
    <div>
      <Container>
        <SortOptions>
          <SortButton isSelected={standardEnum === 'LATEST'} onClick={() => handleSort('LATEST')}>
            최신순
          </SortButton>
          <SortButton isSelected={standardEnum === 'OLDEST'} onClick={() => handleSort('OLDEST')}>
            등록순
          </SortButton>
          <SortButton isSelected={standardEnum === 'RECOMMEND'} onClick={() => handleSort('RECOMMEND')}>
            추천순
          </SortButton>
          <SortButton isSelected={standardEnum === 'VIEW'} onClick={() => handleSort('VIEW')}>
            댓글순
          </SortButton>
        </SortOptions>

        <SearchBar onSearch={handleSearch} />
      </Container>

      {/* 필터링된 프론트 문제집 리스트 표시 */}
      <table>
        <tbody>
          {/* 현재 페이지의 아이템 렌더링 */}
          {currentItems.length > 0 ? (
            currentItems.map((front, index) => (
              <FrontItem key={front.id} item={front} index={index} />
            ))
          ) : (
            <tr>
              <td colSpan="3">검색 결과가 없습니다.</td>
            </tr>
          )}
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
  color: ${(props) => (props.isSelected ? '#FFFFFF' : '#838383')};
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