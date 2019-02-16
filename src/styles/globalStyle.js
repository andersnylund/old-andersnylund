import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    body {
        background-color: ${props => props.theme.white};
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
`;
