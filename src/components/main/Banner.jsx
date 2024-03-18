import styled from "styled-components";
import bannerIcon1 from "../../assets/hero banner1.png";
import bannerIcon2 from "../../assets/hero banner2.png";
import bannerIcon3 from "../../assets/hero banner3.png";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <BannerText>
          이제 혼자
          <img src={bannerIcon1} alt="bannerIcon1" />가 아닌
          <br />
          <BannerText2>
            <img src={bannerIcon2} alt="bannerIcon2" />
            퀴즈업
          </BannerText2>
          과 함께 CS면접 준비하고 취업하자!
        </BannerText>
        <BannerIcon3 src={bannerIcon3} alt="bannerIcon3" />
      </BannerContent>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  width: 100%;
  height: 537px;
  margin: 31px 0 62px;
  background-color: #5263ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
`;

const BannerText = styled.span`
  width: 570px;
  height: 227px;
  margin-right: 50px;
  padding: 0 267px 85.3px 0;
  font-family: Inter;
  font-size: 50px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;

const BannerText2 = styled.span`
  color: #b6ff6d;
`;

const BannerIcon3 = styled.img`
  width: 542px;
  height: 476px;
`;
export default Banner;
