import styled from "styled-components";
import LogoImg from "../../assets/big_logo.png";
import Carousel1 from "../../assets/carousel 1.png";
import Carousel2 from "../../assets/carousel 2.png";
import Carousel3 from "../../assets/carousel 3.png";

const Description = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <LogoIcon src={LogoImg} alt="big-logo" />
        <LogoText>퀴즈업</LogoText>
        <Text>CS전공지식 공유 서비스</Text>
      </ContentContainer>

      {/* quiz up 설명 */}
      <BoxContainer>
        <Box>
          <BoxSubTitle>면접 한방 해결</BoxSubTitle>
          <BoxTitle color="#ff9393">문제집</BoxTitle>
          <BoxImg1 src={Carousel1} alt="carousel1" />
          <BoxText>
            내가 직접 만드는 나만의 CS문제집부터
            <br /> 다른 회원들의 다양한 문제집까지
            <br />
            쏙쏙 골라 학습할 수 있어요.
          </BoxText>
        </Box>
        <Box>
          <BoxSubTitle>인기 만점 BEST</BoxSubTitle>
          <BoxTitle color="#bcd0b8">오늘의 랭킹</BoxTitle>
          <BoxImg2 src={Carousel2} alt="carousel2" />
          <BoxText>
            오늘 가장 많이 학습한 문제집과
            <br /> 스터디방의 BEST 3위를 확인하고
            <br /> 직접 학습해여 CS면접에 대비해보세요.
          </BoxText>
        </Box>
        <Box>
          <BoxSubTitle>함께라서 든든한</BoxSubTitle>
          <BoxTitle color="#c8dbf5">스터디방</BoxTitle>
          <BoxImg3 src={Carousel3} alt="carousel3" />
          <BoxText>
            스터디방을 통해 CS지식을 공유하며
            <br /> 다양한 관점으로 정답의 폭을 넓히고, <br />
            이달의 BEST3인에 도전해보세요.
          </BoxText>
        </Box>
      </BoxContainer>

      <Line />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoIcon = styled.img`
  width: 144px;
  height: 145.8px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const LogoText = styled.span`
  width: 267px;
  height: 96px;
  margin-top: 20px;
  font-family: Inter;
  font-size: 45px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

const Text = styled.span`
  width: 300px;
  height: 96px;
  font-family: Inter;
  font-size: 25px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
`;

const Box = styled.div`
  width: 418px;
  width: 418px;
  height: 580px;
  padding: 37px 50px 71px 49px;
  border-radius: 15px;
  border: solid 1px #656565;
  background-color: #24252a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxTitle = styled.div`
  width: 300px;
  height: 60px;
  font-family: Inter;
  font-size: 45px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => props.color};
`;

const BoxSubTitle = styled.span`
  width: 319px;
  height: 60px;
  font-family: Inter;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

const BoxImg1 = styled.img`
  width: 261.8px;
  height: 170px;
  margin: 54px 21.2px 54px 36px;
  object-fit: contain;
`;
const BoxImg2 = styled.img`
  width: 321px;
  height: 195.8px;
  margin: 34px 0 48.2px;
  object-fit: contain;
`;

const BoxImg3 = styled.img`
  width: 336px;
  height: 129px;
  margin: 83px 0 66px;
  object-fit: contain;
`;

const BoxText = styled.span`
  width: 300px;
  height: 81px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

const Line = styled.div`
  width: 1314px;
  height: 1px;
  margin: 95px 303px 60px;
  background-color: #5f5f5f;
`;

export default Description;
