import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AlarmIcon from "../../assets/alarm.png";

const Alarm = () => {
  const [isPopup, setIsPopup] = useState(false);
  const popupRef = useRef(null);

  const handleClick = () => {
    setIsPopup(!isPopup);
  };

  const handleOutClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  // 알람 기능 구현 후 수정 예정
  const notificationCount = 3;

  return (
    <>
      <Button onClick={handleClick}>알림</Button>{" "}
      {isPopup && (
        <Popup ref={popupRef}>
          <PopHeader>
            <AlarmHeader>
              알림
              <NotificationBadge>{notificationCount}</NotificationBadge>
            </AlarmHeader>
            <CloseBtn onClick={handleClick}>x</CloseBtn>
          </PopHeader>

          {/* 알림 스크롤 부분 */}
          <AlramScroll>
            <AlarmContent>
              <AlarmImage src={AlarmIcon} alt="alram-icon" />
              <AlarmTextContainer>
                삼성 SDS 수시채용 면접준비 채팅방에서 새로운 메세지가
                도착했어요.
              </AlarmTextContainer>
              <AlarmTime>지금</AlarmTime>
            </AlarmContent>
          </AlramScroll>

          {/* 모두 읽음 처리 */}
          <AllReadBtn>
            <AllReadText>모두 읽음 처리하기</AllReadText>
          </AllReadBtn>
        </Popup>
      )}
    </>
  );
};

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #a4a4a4;
  cursor: pointer;
  white-space: nowrap;
  font-size: 16px;

  &:hover {
    color: white;
  }
`;

const Popup = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  width: 439px;
  height: 539px;
  flex-grow: 0;
  margin: 35px 11px 33px 160px;
  padding: 24px 0 15px;
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px #dcdcdc;
  background-color: #262626;
  display: flex;
  flex-direction: column;
`;

const PopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  margin-bottom: 30px;
`;

const AlarmHeader = styled.span`
  width: 100px;
  height: 20px;
  margin: 9px 5px 11px 20px;
  display: flex;
  align-items: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

const NotificationBadge = styled.div`
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-left: 10px;
`;

const CloseBtn = styled.button`
  width: 39px;
  height: 39px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 25px;
`;

const AlramScroll = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

const AlarmContent = styled.div`
  display: flex;
  align-items: center;
  width: 437px;
  height: 77px;
  margin: 18px 1px 21px;
  background-color: rgba(185, 208, 255, 0.8);
`;

const AlarmImage = styled.img`
  width: 29px;
  height: 30px;
  margin-left: 26px;
  margin-right: 26px;
`;

const AlarmTextContainer = styled.div`
  width: 247px;
  margin-top: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  color: #000;
  text-align: left;
  font-weight: normal;
`;

const AlarmTime = styled.div`
  width: 100px;
  font-size: 14px;
  text-align: right;
  color: #060606;
  marign-right: 38px;
`;

const AllReadBtn = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  border-top: 1px solid #a0a0a0;
  margin-top: 10px;
  padding: 10px 0;
  margin-top: auto;
`;

const AllReadText = styled.div`
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.93;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  margin-top: 10px;
`;

export default Alarm;
