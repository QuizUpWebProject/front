import styled from "styled-components";
import SearchIcon from "../../assets/search.png";
import SelectBox from "../study/SelectBox";
import AllWork from "../../assets/Btn_all.png";
import { useNavigate } from "react-router-dom";

export default function SerachBox() {
  const navigate = useNavigate();

  return (
    <SearchSection>
      <SelectBox />
      <SearchInputWrapper>
        <SearchInput placeholder="검색어를 입력하세요." name="search" />
        <SearchImg src={SearchIcon} alt="검색아이콘" />
      </SearchInputWrapper>
      <AllWorkIcon
        onClick={() => navigate("/study/:studyroonid/worklistid")}
        src={AllWork}
        alt="allwork"
      />
    </SearchSection>
  );
}

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  justify-content: flex-end;
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
  margin-left: 5px;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;

const SearchImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const AllWorkIcon = styled.img`
  margin-left: 10px;
`;
