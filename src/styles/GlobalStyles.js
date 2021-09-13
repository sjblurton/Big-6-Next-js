import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border:0;
    }
    a{
        text-decoration: none;
    }
    body {
        background-color: ${(props) => props.theme.color.bgDark};
        color: ${(props) => props.theme.color.white};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
