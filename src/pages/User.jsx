import styled from "styled-components";
import MakeWork from "../assets/Btn_mwork.png";
import Dropdown from "../components/user/StudyDropdown";
import MyWorkSlide from "../components/user/MyWorkSlide";
import StudyWorkSlide from '../components/user/StudyWorkSlide';
import Footer from '../shared/Footer';
import Profile from "../components/user/Profile";

const User = () => {
  return (
    <Wrapper>
      <TopSection>
        <Profile />
      </TopSection>
      <Line1 />
      <TitleSection>
        <Title>나의 문제집 [4]</Title>
        <Icon src={MakeWork} alt="문제집 만들기"/>
      </TitleSection>
      <MyWorkSlide />

      <Line2 />
      <TitleSection>
        <Title>학습중인 문제집 [4]</Title>
        <Dropdown />
      </TitleSection>
      <StudyWorkSlide />
      <Footer />
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1090px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
`;

const Line1 = styled.hr`
  width: 1090px;
  border: 1px solid #868686;
  margin-top: 50px;
  margin-bottom: 45px;
`;

const Line2 = styled.hr`
  width: 1090px;
  border: 1px solid #454545;
  margin-top: 64px;
  margin-bottom: 45px;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 50%;
  text-align: left;
`;

const Icon = styled.img`
  margin-left: 14px;
  font-size: 13px;
  cursor: pointer;
`;

export default User;
