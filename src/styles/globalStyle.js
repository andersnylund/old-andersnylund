import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body {
        margin: 0rem;
        background: ${props => props.theme.blue};
    }
`;
