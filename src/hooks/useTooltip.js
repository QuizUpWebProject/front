import { useState } from "react";
import styled from "styled-components";
import help from "../assets/help.png";

const useToolTip = (defaultDescription) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const TooltipComponent = ({ description }) => (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HelpImg src={help} alt="help" />
      <Description className={hover ? "description visible" : "description"}>
        {description}
      </Description>
    </TooltipContainer>
  );

  return TooltipComponent;
};

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 4px 7px 3px;

  &:hover .description {
    display: block;
  }
`;

const HelpImg = styled.img`
  display: block;
`;

const Description = styled.div`
  display: none;
  position: absolute;
  background-color: #3f424e;
  color: #fff;
  font-family: Inter;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 15px;
  padding: 3px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;

export default useToolTip;
