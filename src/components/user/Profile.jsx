import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
import BtnLogout from "../../assets/Btn_logout.png";
import EditModal from './EditModal';

const Profile = () => {
  return (
    <Wrapper>
      <Img 
        src={Avatar}
        alt="userImage"
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