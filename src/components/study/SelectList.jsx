import styled from "styled-components";
import { useState } from "react";
import DropDown from "../../assets/dropdown2.png";

export default function SelectList({ selectedOption, onChange }) {
  const [isShowOption, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState("인기순");

  const handleSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  // 인기방(입장가능한) 기준 : 인원 초과로 입장 불가능한 스터디방 제외한 인기순

  return (
    <SelectContainer onClick={() => setShowOptions((prev) => !prev)}>
      <Label>
        <Img src={DropDown} alt="icon" />
        {currentValue}
      </Label>
      <SelectOptions
        show={isShowOption}
        value={selectedOption}
        onChange={onChange}
      >
        <Option onClick={handleSelectValue}>인기순</Option>
        <Option onClick={handleSelectValue}>인기순(입장가능한)</Option>
        <Option onClick={handleSelectValue}>공개방</Option>
        <Option onClick={handleSelectValue}>비공개방</Option>
      </SelectOptions>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 20px;
  width: 100px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  cursor: pointer;
`;

const Img = styled.img`
  margin-right: 8px;
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: ${(props) => (props.show ? "none" : "0")};
  overflow: hidden;
  padding: 5px;
  border-radius: 8px;
  background-color: transparent;
  color: #fefefe;
  border: none;
  transition: max-height 0.3s ease-in;
  list-style: none;
  magin: 0;
  padding: 0;
  z-index: 1;
`;

const Option = styled.li`
  background-color: #3f424e;
  color: #fefefe;
  font-size: 14px;
  cursor: pointer;
  padding: 4px;

  &:hover {
    background-color: #f0f0f0;
    color: black;
  }
`;
