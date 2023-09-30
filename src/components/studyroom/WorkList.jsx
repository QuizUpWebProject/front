import { useState } from "react";
import styled from "styled-components";
import SerachBox from "./SearchBox";
import WorkItem from "./WorkItem";

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
      </Wrapper>{" "}
      <WorkItem />
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
