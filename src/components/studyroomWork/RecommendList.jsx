import styled from "styled-components";
import RecommendItem from "./RecommendItem";

export default function RecommendList() {
  const recommdItems = Array(6).fill(null); // 6개 추천 문제집
  // 추천 기능을 구현 안해서 우선은 6개를 렌더링했음

  return (
    <Container>
      <Title>추천 스터디방</Title>
      <ItemBox>
        {recommdItems.map((_, index) => (
          <RecommendItem key={index} />
        ))}
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-bottom: 10px;
`;
