import styled from "styled-components";
import { Link } from "react-router-dom";
import SelectBox from "../components/studyroom/SelectBox";
import StudyList from "../components/studyroom/StudyList";
import MakeStudy from "../assets/Btn_mstudy.png";
import SearchIcon from "../assets/search.png";

const StudyMain = () => {
  return (
    <Wrapper>
      <TopSection>
        <Title>나의 그룹 스터디방 (0)</Title>
        <ImageLink to="/studymake">
          <Image src={MakeStudy} alt="스터디방 만들기" />
        </ImageLink>
      </TopSection>

      <MyStudyList>
        가입된 스터디방이 없네요! 지금 바로 스터디방에 가입하고 스터디원과
        답변을 공유해보세요.
      </MyStudyList>

      <SearchSection>
        <SelectBox />
        <SearchInputWrapper>
          <SearchInput placeholder="검색어를 입력하세요." />
          <SearchImg src={SearchIcon} alt="검색아이콘" />
        </SearchInputWrapper>
      </SearchSection>

      <div>
        <StudyList />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1090px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 50%;
  text-align: left;
`;

const ImageLink = styled(Link)`
  text-align: right;
  text-decoration: none;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  text-align: right;
`;

const MyStudyList = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  justify-content: flex-end;
  margin-top: 50px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #3f424e;
  padding: 5px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  background: transparent;
  width: 200px;

  &::placeholder {
    color: #fff;
  }
`;

const SearchImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export default StudyMain;
