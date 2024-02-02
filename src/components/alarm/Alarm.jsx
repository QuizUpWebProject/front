import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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

  return (
    <>
      <Button onClick={handleClick}>알림</Button>{" "}
      {isPopup && (
        <Popup ref={popupRef}>
          <div>알림</div>

          {/* 알림 스크롤 부분 */}
          <div>
            <div></div>
          </div>

          {/* 모두 읽음 처리 */}
          <button>모두 읽음 처리하기</button>
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
`;

export default Alarm;
