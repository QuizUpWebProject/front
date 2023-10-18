import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from "react";
import LikeIcon from "../assets/heart.png";
import CmtIcon from "../assets/chat.png";
import UserIcon from "../assets/people.png";
import LikeBtn from "../assets/Btn_like.png";
import AllBtn from "../assets/Btn_all.png";
import WorkList from "../components/frontWorkList/WorkList";
import CommentList from "../components/frontWorkList/CommentList";

const FrontWorkList = () => {
    const [textValue, setTextValue] = useState(0);    // 추천수 올리기

    const increaseLike = () => {
      setTextValue(textValue + 1);
    };
  
  return (
    <Wrapper>
      <TopSection>
        <TopTitle>
          정보처리기사 실기_2023 <Works>총 91문제</Works>
        </TopTitle>

        <TopContent>
          <WorkbookInfo>
            <IconTextWrapper>
              <Icon src={UserIcon} alt="작성자"></Icon>소밍밍
            </IconTextWrapper>
            <LikeCmt>
              <IconTextWrapper>
                <Icon src={LikeIcon} alt="추천"></Icon>{textValue}
              </IconTextWrapper>
              <IconTextWrapper>
                <Icon src={CmtIcon} alt="댓글"></Icon>04
              </IconTextWrapper>
            </LikeCmt>
          </WorkbookInfo>
          <Buttons>
            <Link to='/front/:worklistid/:workid'>
              <img src={AllBtn} alt="전체학습하기" />
            </Link>
            <img src={LikeBtn} alt="추천하기" onClick={increaseLike} style={{cursor: 'pointer'}}/>
          </Buttons>
        </TopContent>
      </TopSection>

      <WorkList />

      <CommentList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1090px;
  margin: 0 auto 50px;
`;

const TopSection = styled.div`
  padding: 20px 0;
  margin-bottom: 50px;
`;

const TopTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;

const Works = styled.div`
  font-size: 15px;
  margin-left: 42px;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

const WorkbookInfo = styled.div`
 display: flex;
 gap: 52px; 
`;

const LikeCmt = styled.div`
  gap: 17px;
  display: flex;
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center; 
`;

const Icon = styled.img`
  margin-right: 5px; 
`;  

const Buttons = styled.div`
  display: flex;
  gap: 17px;
  text-align: right;
  align-items: center;
`;

export default FrontWorkList;