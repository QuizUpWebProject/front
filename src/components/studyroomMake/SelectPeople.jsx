import { useState } from "react";
import styled from "styled-components";
import DropDownIcon from "../../assets/dropdown2.png";

export default function SelectPeople() {
  const [isShowOption, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState("인원수 선택 (1 ~ 50명)");

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
        {Array.from({ length: 50 }, (_, index) => (
          <Option key={index} onClick={handleSelectValue}>
            {index + 1}
          </Option>
        ))}
      </SelectOptions>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  position: relative;
  width: 866px;
  height: 42px;
  padding: 8px;
  background-color: #3f424e;
  align-self: center;
  border-radius: 6px;
  cursor: pointer;
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
  height: 130px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  overflow-y: auto;
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
  transition: max-height 0.2s ease-in-out;

  /* Webkit (Chrome, Safari) 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5263ff; /* 스크롤바 색상 */
    border-radius: 10px;
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: #5263ff transparent;

  & {
    scrollbar-color: #5263ff transparent;
  }
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
