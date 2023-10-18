import { useState, useEffect } from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import CommentBox from "./CommentBox";

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

export default function CommentList() {
  // 임시 댓글 data 
  const commentData = [
    {id: 0, user: "소밍밍", content: "안녕하세요. 문제가 너무 좋네요. 덕분에 학습 잘 하고 갑니다.", date: "2023.08.20 21:23", like: 7},
    {id: 1, user: "소밍밍", content: "안녕하세요. 문제가 너무 좋네요. 덕분에 학습 잘 하고 갑니다.", date: "2023.08.23 21:23", like: 5},
    {id: 2, user: "소밍밍", content: "안녕하세요. 문제가 너무 좋네요. 덕분에 학습 잘 하고 갑니다.", date: "2023.08.10 21:23", like: 0},
    {id: 3, user: "소밍밍", content: "안녕하세요. 문제가 너무 좋네요. 덕분에 학습 잘 하고 갑니다.", date: "2023.08.09 21:23", like: 5},
  ];

  const [data, setData] = useState(commentData);
  const [showMore, setShowMore] = useState(false);  // 답안 댓글 토글
  const [sortOption, setSortOption] = useState('latest'); // 초기 정렬 기준 : 최신순

  useEffect(() => {
    // 댓글 정렬
    const sortData = (sortKey) => {
      const sortedData = [...data]; // 원본 데이터를 변경하지 않기 위해 복사

      if (sortKey === 'latest') {
        sortedData.sort((a, b) => new Date(b.date) - new Date(a.date)); // 최신순
      } else if (sortKey === 'oldest') {
        sortedData.sort((a, b) => new Date(a.date) - new Date(b.date)); // 등록순
      } else if (sortKey === 'mostLiked') {
        sortedData.sort((a, b) => b.like - a.like);                     // 추천순
      }

      return sortedData;
    };
    const sortedData = sortData(sortOption);
  
    // 정렬된 데이터와 현재 데이터가 다를 경우에만 업데이트
    if (!isEqual(sortedData, data)) {
      setData(sortedData);
    }
  }, [sortOption, data]);
  
  const visibleBtn= data.length > 3; // 댓글이 3개 이상일 때만 버튼이 보임
  const toggleShowMore = () => {
    setShowMore(!showMore);
  }

  return(
    <div>
      <CommentBox commentData={commentData}/>

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
          onClick={() => setSortOption('mostLiked')}
          active={sortOption === 'mostLiked'}
        >
          추천순
        </SortButton>
      </SortOptions>

      {data.slice(0, showMore ? data.length : 3).map((comment, index) => (
        <CommentItem key={index} item={comment} />
      ))}
      {visibleBtn && (
        <ShowMoreBtn onClick={toggleShowMore}>
          {showMore ? "댓글 숨기기" : "댓글 더보기"}
        </ShowMoreBtn>
      )}
    </div>
  );
};

const SortOptions = styled.div`
  align-items: center;
  display: flex;
  padding: 5px 0;
  margin-bottom: 11px;
`;

const SortButton = styled.button`
  margin-right: 15spx;
  background-color: transparent;
  color: ${(props) => (props.active ? '#FFFFFF' : '#838383')};
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const ShowMoreBtn = styled.button`
  width: 1090px;
  height: 37px;
  border: none;
  border-radius: 6px;
  background-color: #3f424e;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 35px;
  margin-top: 20px;
`;