import React, { useState } from "react";
import styled from "styled-components";
import StudyItem from "./StudyItem";
import SelectList from "./SelectList";
import usePagination from "../../hooks/usePagination";
import LeftIcon from "../../assets/left.png";
import RightIcon from "../../assets/right.png";

export default function StudyList({ data }) {
  // 스터디 리스트 데이터 (예시)
  const studyData = [
    { id: 1, title: "스터디 1", type: "프론트엔드" },
    { id: 2, title: "스터디 2", type: "백엔드" },
    { id: 3, title: "스터디 3", type: "프론트엔드" },
    { id: 4, title: "스터디 4", type: "백엔드" },
    { id: 5, title: "스터디 4", type: "백엔드" },
    { id: 6, title: "스터디 4", type: "백엔드" },
    { id: 7, title: "스터디 4", type: "백엔드" },
    { id: 8, title: "스터디 4", type: "백엔드" },
    { id: 9, title: "스터디 4", type: "백엔드" },
    { id: 10, title: "스터디 4", type: "백엔드" },
    { id: 11, title: "스터디 4", type: "백엔드" },
    { id: 12, title: "스터디 4", type: "백엔드" },
    { id: 13, title: "스터디 4", type: "백엔드" },
    { id: 14, title: "스터디 4", type: "백엔드" },
    { id: 15, title: "스터디 4", type: "백엔드" },
    { id: 16, title: "스터디 4", type: "백엔드" },
    { id: 17, title: "스터디 4", type: "백엔드" },
    { id: 18, title: "스터디 4", type: "백엔드" },
    { id: 19, title: "스터디 4", type: "백엔드" },
    { id: 20, title: "스터디 4", type: "백엔드" },
    { id: 21, title: "스터디 4", type: "백엔드" },
  ];

  // 상태 변수: 현재 선택된 유형
  const [selectedType, setSelectedType] = useState("전체");
  // 추천/조회 선택
  const [selectOption, setSelectOption] = useState("인기순");

  const itemsPerPage = 15; // 페이지 당 보여줄 아이템 수
  const {
    currentPage,
    currentItems,
    totalPages,
    paginate,
    goToPrevPage,
    goToNextPage,
  } = usePagination(
    studyData, // 데이터를 studyData로 변경
    itemsPerPage
  );

  // 리스트를 필터링하는 함수
  const filterStudyList = () => {
    let filteredList = studyData;
    if (selectedType !== "전체") {
      filteredList = filteredList.filter(
        (study) => study.type === selectedType
      );
    }

    // 정렬 옵션에 따라 정렬

    return filteredList;
  };

  // 전체, 프론트엔드, 백엔드 버튼 클릭 시 상태 업데이트
  const handleFilterClick = (type) => {
    setSelectedType(type);
  };

  // 정렬 변경시 상태 업데이트
  const handleOptionChange = (event) => {
    setSelectOption(event.target.value);
  };

  return (
    <div>
      <Container>
        <FilterButtons>
          <FilterBtn
            isSelected={selectedType === "전체"}
            onClick={() => handleFilterClick("전체")}
          >
            전체
          </FilterBtn>
          <FilterBtn
            isSelected={selectedType === "프론트엔드"}
            onClick={() => handleFilterClick("프론트엔드")}
          >
            프론트엔드
          </FilterBtn>
          <FilterBtn
            isSelected={selectedType === "백엔드"}
            onClick={() => handleFilterClick("백엔드")}
          >
            백엔드
          </FilterBtn>
        </FilterButtons>
        <SelectList
          selectedOption={selectOption}
          onChange={handleOptionChange}
        />
      </Container>

      {/* 필터링된 스터디 리스트 표시 */}
      <div>
        {/* 현재 페이지의 아이템 렌더링 */}
        {currentItems.map((study) => (
          <StudyItem key={study.id} title={study.title} />
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
      </div>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between; /* 왼쪽/오른쪽 정렬 설정 */
  align-items: center; /* 수직 가운데 정렬 */
`;

const FilterButtons = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 16px;
`;

const FilterBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isSelected ? "#fff" : "#8B8B8B")};
  font-size: 16px;
  font-weight: 500;
  margin-right: 10px;
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
