import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{box-sizing:border-box}

body{
    margin:0;
    padding:0;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: Verdana, Geneva, Tahoma, sans-serif
}
`;
