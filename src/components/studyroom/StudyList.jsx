import React, { useState } from "react";
import styled from "styled-components";
import StudyItem from "./StudyItem";
import SelectList from "./SelectList";

export default function StudyList() {
  // 스터디 리스트 데이터 (예시)
  const studyData = [
    { id: 1, title: "스터디 1", type: "프론트엔드" },
    { id: 2, title: "스터디 2", type: "백엔드" },
    { id: 3, title: "스터디 3", type: "프론트엔드" },
    { id: 4, title: "스터디 4", type: "백엔드" },
  ];

  // 상태 변수: 현재 선택된 유형
  const [selectedType, setSelectedType] = useState("전체");
  // 추천/조회 선택
  const [selectOption, setSelectOption] = useState("조회순");

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
        {/* {filterStudyList().map((study) => (
          <div key={study.id}>{study.title}</div>
        ))} */}
        <StudyItem />
        <StudyItem />
        <StudyItem />
        <StudyItem />
        <StudyItem />
        <StudyItem />
        <StudyItem />
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
