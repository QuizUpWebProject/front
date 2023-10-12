import styled from "styled-components";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <Wrapper>
      <Title>로그인</Title>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.div`
  color: #5263ff;
  font-size: 40px;
  font-weight: 600;
`;
