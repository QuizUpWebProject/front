import { useState } from "react";
import styled from "styled-components";
import help from "../../assets/help.png";

const Tooltip = () => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    }
    const handleMouseLeave = () => {
        setHover(false);
    }

    return(
        <TooltipContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <HelpImg src={help} alt="help" />
            {hover && (<Description className="description">
                문제집을 본인이 직접 만들고 싶다면 마이페이지에서 만들 수 있습니다.
            </Description>)}
        </TooltipContainer>
    );
};

const TooltipContainer = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding: 3.4px 10px 7px;

    &.hover .description{
        display: block;
    }
`;

const HelpImg = styled.img`
    display: block;
`;

const Description = styled.div`
    display: block;
    background-color: #3F424E;
    font-size: 10px;
    margin-top: 15px;
    padding: 3px;
    bottom: 0;
    top: 100%;
    left: 0;
    white-space: nowrap;
`;

export default Tooltip;