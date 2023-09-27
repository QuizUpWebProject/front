import { useState } from "react";
import styled from "styled-components";

const SelectBox = () => {
  const [isShowOption, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState("제목");

  const handleSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  return (
    <SelectContainer onClick={() => setShowOptions((prev) => !prev)}>
      <Label>{currentValue}</Label>
      <SelectOptions show={isShowOption}>
        <Option onClick={handleSelectValue}>제목</Option>
        <Option onClick={handleSelectValue}>내용</Option>
        <Option onClick={handleSelectValue}>작성자</Option>
      </SelectOptions>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  width: 55px;
  padding: 8px;
  border-radius: 6px;
  background-color: #3f424e;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #fff;
    font-size: 20px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
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
