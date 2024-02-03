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

  // 알람 기능 구현 후 수정 예정 (더미데이터)
  const notifications = [
    {
      id: 1,
      message:
        "삼성 SDS 수시채용 면접준비 채팅방에서 새로운 메세지가 도착했어요.",
      time: "지금",
    },
    {
      id: 2,
      message:
        "삼성 SDS 수시채용 면접준비 채팅방에서 새로운 메세지가 도착했어요.",
      time: "2시간 전",
    },
    {
      id: 3,
      message:
        "삼성 SDS 수시채용 면접준비 채팅방에서 새로운 메세지가 도착했어요.",
      time: "21시간 전",
    },
    {
      id: 4,
      message:
        "삼성 SDS 수시채용 면접준비 채팅방에서 새로운 메세지가 도착했어요.",
      time: "1일 전",
    },
    {
      id: 5,
      message:
        "삼성 SDS 수시채용 면접준비 채팅방에서 새로운 메세지가 도착했어요.",
      time: "12월 31일",
    },
    {
      id: 6,
      message:
        "삼성 SDS 수시채용 면접준비 채팅방에서 새로운 메세지가 도착했어요.",
      time: "12월 31일",
    },
    {
      id: 7,
      message:
        "삼성 SDS 수시채용 면접준비 채팅방에서 새로운 메세지가 도착했어요.",
      time: "12월 29일",
    },
    {
      id: 8,
      message:
        "삼성 SDS 수시채용 면접준비 채팅방에서 새로운 메세지가 도착했어요.",
      time: "11월 1일",
    },
  ];

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
          <AlarmScroll>
            {notifications.map((notification) => (
              <AlarmContent
                key={notification.id}
                isNow={notification.time === "지금"}
              >
                <AlarmImage src={AlarmIcon} alt="alram-icon" />
                <AlarmTextContainer isNow={notification.time === "지금"}>
                  {notification.message}
                </AlarmTextContainer>
                <AlarmTime isNow={notification.time === "지금"}>
                  {notification.time}
                </AlarmTime>
              </AlarmContent>
            ))}
          </AlarmScroll>

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

const AlarmScroll = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  width: 100%;

  &::-webkit-scrollbar {
    width: 10px;
    height: 173px;
    margin-left: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6d6c6c;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const AlarmContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 77px;
  background-color: ${(props) =>
    props.isNow ? "rgba(185, 208, 255, 0.8)" : "#262626"};
  box-sizing: border-box;
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
  color: ${(props) => (props.isNow ? "#000" : "#bcbcbc")};
  text-align: left;
  font-weight: normal;
`;

const AlarmTime = styled.div`
  width: 80px;
  font-size: 14px;
  text-align: right;
  color: ${(props) => (props.isNow ? "#000" : "#bcbcbc")};
  marign-right: 30px;
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
