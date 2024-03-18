import styled from "styled-components";
import RankingIcon from "../../assets/rangking.png";
import CardIcon from "../../assets/card icon.png";
import FrontendIcon from "../../assets/forntend.png";
import BackendIcon from "../../assets/backend.png";
import OpenStudyIcon from "../../assets/open_study.png";
import PrivateStudyIcon from "../../assets/private_study.png";
import LockIcon from "../../assets/lock.png";
import { useNavigate } from "react-router-dom";
import useToolTip from "../../hooks/useTooltip";
import useModal from "../../hooks/useModal";

const Ranking = () => {
  const navigate = useNavigate();

  const Tooltip = useToolTip("");

  const { openModal, Modal } = useModal();

  // open modal
  const handleModal = () => {
    openModal();
  };

  return (
    <Wrapper>
      <Icon src={RankingIcon} alt="rankingIcon" />
      <Title>오늘의 랭킹</Title>
      <Description>
        오늘 가장 많이 학습된 문제집과 인기 스터디방을 추천드려요.
      </Description>

      <ContentWrapper>
        <ItemWrapper>
          <ItemHeader color="#ffcbc0">
            <ItemTitle>문제집</ItemTitle>
            <ItemIcon src={CardIcon} alt="cardicon" />
          </ItemHeader>
          <ItemBody>
            <Item>
              <ItemImage src={FrontendIcon} alt="frontend" />
              <div onClick={() => navigate("/front/:worklistid")}>
                디자인패턴 문제집 모음집
              </div>
              <Tooltip description="삼성CS 면접 대비 스터디방입니다. 일주일에 1개 이상의 면접 질문 공유하실 분만 들어와주세요~" />
            </Item>
            <Line />
            <Item>
              <ItemImage src={BackendIcon} alt="backend" />
              <div onClick={() => navigate("/back/:worklistid")}>
                디자인패턴 문제집 모음집
              </div>
              <Tooltip description="삼성CS 면접 대비 스터디방입니다. 일주일에 1개 이상의 면접 질문 공유하실 분만 들어와주세요~" />
            </Item>
            <Line />
            <Item>
              <ItemImage src={BackendIcon} alt="backend" />
              <div onClick={() => navigate("/back/:worklistid")}>
                디자인패턴 문제집 모음집
              </div>
              <Tooltip description="삼성CS 면접 대비 스터디방입니다. 일주일에 1개 이상의 면접 질문 공유하실 분만 들어와주세요~" />
            </Item>
            <Line />
            <Item>
              <ItemImage src={FrontendIcon} alt="frontend" />
              <div onClick={() => navigate("/front/:worklistid")}>
                디자인패턴 문제집 모음집
              </div>
              <Tooltip description="삼성CS 면접 대비 스터디방입니다. 일주일에 1개 이상의 면접 질문 공유하실 분만 들어와주세요~" />
            </Item>
            <Line />
            <Item>
              <ItemImage src={FrontendIcon} alt="frontend" />
              <div onClick={() => navigate("/front/:worklistid")}>
                디자인패턴 문제집 모음집
              </div>
              <Tooltip description="삼성CS 면접 대비 스터디방입니다. 일주일에 1개 이상의 면접 질문 공유하실 분만 들어와주세요~" />
            </Item>
          </ItemBody>
        </ItemWrapper>

        <ItemWrapper>
          <ItemHeader color="#c8dbf5">
            <ItemTitle>스터디방</ItemTitle>
            <ItemIcon src={CardIcon} alt="cardicon" />
          </ItemHeader>
          <ItemBody>
            <Item>
              <ItemImage src={PrivateStudyIcon} alt="private-study" />
              <div onClick={handleModal}>싱글톤패턴 문제 완벽 대비</div>{" "}
              <Tooltip description="삼성CS 면접 대비 스터디방입니다. 일주일에 1개 이상의 면접 질문 공유하실 분만 들어와주세요~" />
              <LockImg src={LockIcon} alt="lock" />
            </Item>
            <Line />
            <Item>
              <ItemImage src={OpenStudyIcon} alt="open-study" />
              <div onClick={() => navigate("/study/:studyroomid")}>
                싱글톤패턴 문제 완벽 대비
              </div>{" "}
              <Tooltip description="삼성CS 면접 대비 스터디방입니다. 일주일에 1개 이상의 면접 질문 공유하실 분만 들어와주세요~" />
            </Item>
            <Line />
            <Item>
              <ItemImage src={PrivateStudyIcon} alt="private-study" />
              <div onClick={handleModal}>싱글톤패턴 문제 완벽 대비</div>{" "}
              <Tooltip description="삼성CS 면접 대비 스터디방입니다. 일주일에 1개 이상의 면접 질문 공유하실 분만 들어와주세요~" />
              <LockImg src={LockIcon} alt="lock" />
            </Item>
            <Line />
            <Item>
              <ItemImage src={OpenStudyIcon} alt="open-study" />
              <div onClick={() => navigate("/study/:studyroomid")}>
                싱글톤패턴 문제 완벽 대비
              </div>{" "}
              <Tooltip description="삼성CS 면접 대비 스터디방입니다. 일주일에 1개 이상의 면접 질문 공유하실 분만 들어와주세요~" />
            </Item>
            <Line />
            <Item>
              <ItemImage src={OpenStudyIcon} alt="open-study" />
              <div onClick={() => navigate("/study/:studyroomid")}>
                싱글톤패턴 문제 완벽 대비
              </div>{" "}
              <Tooltip description="삼성CS 면접 대비 스터디방입니다. 일주일에 1개 이상의 면접 질문 공유하실 분만 들어와주세요~" />
            </Item>
          </ItemBody>
        </ItemWrapper>
      </ContentWrapper>

      {/* 비공개 스터디방일 경우 modal */}
      <Modal style={{ width: "400px", height: "220px" }}>
        <ModalContent>
          <div>
            <ModalBody>
              이 스터디방은 비공개입니다. 가입코드를 입력해주세요.
            </ModalBody>
            <CodeInput type="password" maxLength="4" placeholder="* * * *" />
          </div>
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 67px;
  height: 67px;
  margin-top: 50px;
  margin-bottom: 50px;
  object-fit: contain;
`;

const Title = styled.div`
  width: 267px;
  height: 96px;
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

const Description = styled.div`
  width: 800px;
  height: 96px;
  margin-bottom: 72px;
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

const ContentWrapper = styled.div`
  display: flex;
`;

const ItemWrapper = styled.div``;

const ItemHeader = styled.div`
  display: flex;
  flex-direction: space-between;
  align-items: center;
  width: 615px;
  height: 74px;
  margin: 0 20px;
  padding: 20px 20px 20px 30px;
  background-color: ${(props) => props.color};
  border-radius: 13px 13px 0px 0px;
`;

const ItemTitle = styled.span`
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  margin-left: 20px;
`;

const ItemIcon = styled.img`
  width: 82px;
  height: 22px;
  margin-left: 380px;
  object-fit: contain;
`;

const ItemBody = styled.div`
  width: 615px;
  height: 330px;
  margin: 0 20px;
  padding: 20px 20px 20px 30px;
  background-color: #fff;
  border-radius: 0px 0px 13px 13px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

const ItemImage = styled.img`
  width: 65px;
  height: 19px;
  margin-right: 20px;
  object-fit: contain;
`;

const Line = styled.div`
  width: 615px;
  height: 1.5px;
  margin: 18.5px 0 19px;
  background-color: #ddd;
`;

const LockImg = styled.img`
  width: 13.3px;
  height: 17.5px;
  flex-grow: 0;
  color: #fa9600;
  margin-left: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 60px;
  font-size: 14px;
  text-align: center;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
  color: #c7c7c7;
  text-align: center;
`;

const CodeInput = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  width: 266px;
  height: 37px;
  padding: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: linear-gradient(to bottom, #636363, #6363634d);

  &::placeholder {
    color: #acacac;
    font-size: 18px;
  }
`;

export default Ranking;
