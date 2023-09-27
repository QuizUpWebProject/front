import React, { useState } from "react";
import styled from "styled-components";
import StudyItem from "./StudyItem";

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

  // 리스트를 필터링하는 함수
  const filterStudyList = () => {
    if (selectedType === "전체") {
      return studyData; // 전체를 선택한 경우 모든 리스트 반환
    } else {
      return studyData.filter((study) => study.type === selectedType);
    }
  };

  // 전체, 프론트엔드, 백엔드 버튼 클릭 시 상태 업데이트
  const handleFilterClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      {/* 버튼 그룹 생성 */}
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
