import { useState } from "react";
import styled from "styled-components";
import DropDownIcon from "../../assets/dropdown2.png";

export default function SelectCategory() {
  const [isShowOption, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState("카테고리 선택");

  const handleSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  return (
    <SelectContainer onClick={() => setShowOptions((prev) => !prev)}>
      <Label>
        {currentValue}
        <Icon src={DropDownIcon} alt="dropdown" />
      </Label>
      <SelectOptions show={isShowOption}>
        <Option onClick={handleSelectValue}>프론트엔드</Option>
        <Option onClick={handleSelectValue}>백엔드</Option>
      </SelectOptions>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  position: relative;
  width: 866px;
  height: 42px;
  padding: 5px;
  background-color: #3f424e;
  align-self: center;
  border-radius: 6px;
  cursor: pointer;
  z-index: 1;
`;

const Label = styled.label`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  margin-top: 10px;
`;

const Icon = styled.img`
  margin-left: 2d5px;
  margin-right: 20px;
  //margin-top: 15px;
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
  transition: max-height 0.2s ease-in-out;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  text-align: center;
  margin-top: 10px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;
