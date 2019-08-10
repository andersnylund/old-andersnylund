import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme';
import Page from '../components/Page';
import Header from '../components/Header';

const Container = styled.section`
  max-width: ${props => props.theme.maxWidth};
  margin-right: auto;
  background-color: hsla(0, 0%, 90%);
  border-radius: 2rem;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.2);
`;

const Uses = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Page>
        <Header />
        <Container>
          <h1>Uses</h1>
          <p>
            A list of things that I use to keep productive and make my work more
            effective
          </p>
          <h2>Hardware</h2>
          <ul>
            <li>MacBook Pro 13 2018 w/ TouchBar 16GB 256GB i5 4 cores</li>
            <li>2 different Vortex Poker Keyboards with custom keycaps</li>
            <li>Samsung 32&quot; UH850 UHD Monitor</li>
            <li>Logitech G305 Wireless mouse</li>
          </ul>
          <h2>VS Code editor</h2>
          <ul>
            <li>Atom Dark One theme</li>
            <li>Extensions</li>
            <ul>
              <li>Wrap Console Log Simple</li>
              <li>vscode-styled-components</li>
              <li>vscode-pdf</li>
              <li>Visual Studio IntelliCode</li>
              <li>TSLint</li>
              <li>Sass</li>
              <li>Prisma</li>
              <li>Prettier</li>
              <li>open in browser</li>
              <li>Markdown PDF</li>
              <li>Markdown All in One</li>
              <li>LaTeX Workshop</li>
              <li>Jest</li>
              <li>GraphQL</li>
              <li>GitLens – Git supercharged</li>
              <li>ESLint</li>
              <li>ES7 React/Redux/GraphQL/React-Native snippets</li>
              <li>DotENV</li>
              <li>Docker</li>
              <li>Atom One Dark Theme</li>
              <li>Code Spell Checker</li>
            </ul>
            <li>Fira Code font</li>
            <li>Material Icon Theme</li>
          </ul>
          <h2>Software</h2>
          <ul>
            <li>iTerm 2 version 3</li>
            <li>fish shell</li>
            <li>nvm node version manager (jorgebucaran/fish-nvm)</li>
            <li>Brave Browser</li>
            <li>
              Karabiner Elements (see&nbsp;
              <a href="https://blog.andersnylund.com/supercharge-your-keyboard/">
                this
              </a>
              )
            </li>
            <li>Spectacleapp</li>
            <li>MacPass</li>
            <li>Alfred 4</li>
          </ul>
          <h2>Ergonomics</h2>
          <p>To keep my health and posture in somewhat order</p>
          <ul>
            <li>Ikea Markus office chair</li>
            <li>Ikea Bekant adjustable electric office desk</li>
            <li>Nexstand laptop stand</li>
            <li>CoolerMaster Masternotepal Pro laptop stand</li>
            <li>
              My previously mentioned Vortex Poker 60% keyboard (see&nbsp;
              <a href="https://blog.andersnylund.com/supercharge-your-keyboard/">
                this
              </a>
              )
            </li>
            <li>Herschel Little America Grey-Brown backpack</li>
          </ul>
        </Container>
      </Page>
    </>
  </ThemeProvider>
);

export default Uses;
