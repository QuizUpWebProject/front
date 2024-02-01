import { useState } from "react";
import HelpIcon from "../../assets/help.png";
import styled from "styled-components";

export default function PlusButton() {
  // helpicon hover 시 나오는 문구
  const [showToolTip, setToolTip] = useState(false);

  const toggleToolTip = () => {
    setToolTip(!showToolTip);
  };

  return (
    <>
      <Button>
        나의 문제집에 추가
        {/* Hover 이벤트 (helpicon hover 시 나오는 안내 문구) */}
        <HelpIconWrapper
          onMouseEnter={toggleToolTip}
          onMouseLeave={toggleToolTip}
        >
          <Img src={HelpIcon} alt="help" />
          {showToolTip && (
            <Tooltip>
              ...
            </Tooltip>
          )}
        </HelpIconWrapper>
      </Button>
    </>
  );
}

const Button = styled.button`
  width: 513px;
  height: 46px;
  background-color: #3F424E;
  border: none;
  border-radius: 6px;
  color: #d1d1d1;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 70px;
`;

const Img = styled.img`
  margin-left: 10px;
  width: 17px;
  height: 17px;
`;

const HelpIconWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const Tooltip = styled.div`
  background-color: #3f424e;
  border: none;
  color: #d1d1d1;
  font-size: 12px;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  position: absolute;
  bottom: calc(100% + 6.8px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  &::after {
    background-color: #3f424e;
    content: "";
    display: block;
    left: 75px;
    position: absolute;
    top: -7px;
    width: 100%;
    z-index: 1;
  }

  &::before {
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 75px;
    position: absolute;
    top: -8px;
    width: 100%;
    z-index: 0;
  }
`;
