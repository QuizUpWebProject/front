import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import avatarMan from "../../assets/avatar_man.png";
import avatarWoman from "../../assets/avatar_woman.png";
import BtnLogout from "../../assets/Btn_logout.png";
import EditModal from './EditModal';

const Profile = () => {
  const [isImg, setIsImg] = useState(true);

  // 유저 이미지 전환
  const toggleImg = () => {
    setIsImg(!isImg);
  };

  return (
    <Wrapper>
      <Img 
        src={isImg ? avatarWoman : avatarMan}
        alt="userImage"
        onClick={toggleImg} 
        width={85}/>
      <Info>
        <TopContent>
          <UserName>소밍밍</UserName>{'님'}
          <EditModal />
        </TopContent>
        <BottomContent>
          <UserEmail>lucas50103@naver.com</UserEmail>
          <ImageLink to="/login">
            <Img src={BtnLogout} alt="logout" />
          </ImageLink>
        </BottomContent>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  cursor: pointer;
  margin-right: 26px;
`;

const ImageLink = styled(Link)`
  text-decoration: none;
`;

const UserName = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

const TopContent = styled.div`
  display: flex;
  align-intems: center;
  font-size: 20px;
  margin-bottom: 11px;
`;

const BottomContent = styled.div`
  display: flex;  
  align-items: center;
`;

const UserEmail = styled.span`
  font-size: 18px;
  color: #CBCBCB;
  margin-right: 10px;
`;

export default Profile;
