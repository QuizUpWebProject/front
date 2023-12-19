import React from "react";
import styled from "styled-components";

export default function PasswordForm({
  password,
  passwordConfirm,
  onPasswordChange,
  onPasswordConfirmChange,
  onBlur,
  isValid,
  isError,
}) {
  return (
    <Container>
      <Label>
        비밀번호<span>*</span>
      </Label>
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
      />
      <Text style={{ color: isValid ? "#939393" : "#ff0000" }}>
        영문,숫자,특수문자 중 2가지 이상의 문자조합 8-13자로 입력해주세요.
      </Text>
      <Input
        type="password"
        placeholder="비밀번호를 다시 한번 더 입력해주세요."
        value={passwordConfirm}
        onChange={(e) => onPasswordConfirmChange(e.target.value)}
        onBlur={onBlur}
      />
      {isError && (
        <PasswordMisMatch>비밀번호가 일치하지 않습니다.</PasswordMisMatch>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
  margin-bottom: 14px;

  span {
    color: #ff0000;
  }
`;

const Input = styled.input`
  width: 866px;
  height: 42px;
  background-color: #3f424e;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  padding: 5px;
  margin-bottom: 15px;

  &::placeholder {
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    padding: 5px;
  }
`;

const Text = styled.div`
  color: #939393;
  font-size: 13px;
  font-weight: 400;
  line-height: 29px;
  margin-bottom: 15px;
`;

const PasswordMisMatch = styled.div`
  color: #ff0000;
  font-weight: 600;
  font-size: 14px;
  margin-top: 10px;
`;
