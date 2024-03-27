import React, { useState } from "react";
import styled from "styled-components";
import DropDownIcon from "../../assets/dropdown.png";

const SelectBox = ({ onSelectChange }) => {
  const [isShowOption, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState("제목");

  const handleSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
    onSelectChange(innerText);
  };

  return (
    <SelectContainer onClick={() => setShowOptions((prev) => !prev)}>
      <Label>
        {currentValue}
        <Icon src={DropDownIcon} alt="dropdown" />
      </Label>
      <SelectOptions show={isShowOption}>
        <Option onClick={handleSelectValue}>제목</Option>
        <Option onClick={handleSelectValue}>닉네임</Option>
      </SelectOptions>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  width: 70px;
  padding: 8px;
  background-color: #3f424e;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-radius: 6px 0 0 6px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;

const Icon = styled.img`
  margin-left: 12px;
`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 90px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

export default SelectBox;
