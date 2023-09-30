import { useState } from "react";
import styled from "styled-components";
import SerachBox from "./SearchBox";
import WorkItem from "./WorkItem";
import usePagination from "../../hooks/usePagination";
import LeftIcon from "../../assets/left.png";
import RightIcon from "../../assets/right.png";

export default function WorkLikst() {
  // 문제 리스트 data (예시)
  const workData = [
    {
      id: 1,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 2,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 3,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 4,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 5,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 6,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 7,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 8,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 9,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 10,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 11,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 12,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 13,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 14,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 15,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 16,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 17,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 18,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 19,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
    {
      id: 20,
      title: "문제제목 예시 문제제목 예시 문제제목 예시",
      type: "최신순",
    },
  ];

  // default 값은 '최신순'
  const [selectedType, setSelectedType] = useState("최신순");

  const itemsPerPage = 15; // 페이지 당 보여줄 아이템 수
  const {
    currentPage,
    currentItems,
    totalPages,
    paginate,
    goToPrevPage,
    goToNextPage,
  } = usePagination(
    workData, // 데이터를 workData로 변경
    itemsPerPage
  );

  // 문제 리스트 정렬
  const filterWorkList = () => {
    // 정렬 기준에 따라 데이터 변경
    let filteredList = workData;
    if (selectedType !== "전체") {
      filteredList = filteredList.filter((work) => work.type === selectedType);
    }

    // 정렬 옵션에 따라 정렬

    return filteredList;
  };

  // 최신순/등록순/조회순 버튼 클릭 시 상태 업데이트
  const handleFilterClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <Wrapper>
        <FilterButtons>
          <FilterBtn
            isSelected={selectedType === "최신순"}
            onClick={() => handleFilterClick("최신순")}
          >
            최신순
          </FilterBtn>
          <FilterBtn
            isSelected={selectedType === "등록순"}
            onClick={() => handleFilterClick("등록순")}
          >
            등록순
          </FilterBtn>
          <FilterBtn
            isSelected={selectedType === "조회순"}
            onClick={() => handleFilterClick("조회순")}
          >
            조회순
          </FilterBtn>
        </FilterButtons>

        <SerachBox />
      </Wrapper>

      {/* 필터링된 스터디 리스트 표시 */}
      <div>
        {/* 현재 페이지의 아이템 렌더링 */}
        {currentItems.map((study) => (
          <WorkItem key={study.id} title={study.title} />
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

const Wrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FilterButtons = styled.div`
  display: flex;
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
