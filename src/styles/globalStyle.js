import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body {
        margin: 0;
        background: ${props => props.theme.blue} !important;
        font-family: sans-serif;
        color: ${props => props.theme.black};
    }
`;
