import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* textColor가 보통은 하얀색으로 가끔 다른 색상 쓰일 때는 <GlobalStyle textColor="#8B8B8B" /> 형식으로 사용할 수 있습니다=*/
body {
    background-color: #16161D;
    color: ${({ textColor }) => textColor || "#FFFFFF"};
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
}

/* logo 텍스트 색상 (추후 수정 가능) */
.logo {
    color: #5263FF;
}
`;

export default GlobalStyle;
