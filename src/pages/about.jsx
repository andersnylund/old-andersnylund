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

  a {
    color: ${props => props.theme.grey};
    text-shadow: 1px 1px 1px ${props => props.theme.pink};
    text-decoration: none;
  }
`;

const About = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Page>
        <Header />
        <Container>
          <h2>TLDR;</h2>
          <p>
            Fullstack web developer from Finland. I love to solve problems and
            create stuff. I constantly learn and build things with my freshly
            acquired skills.
          </p>

          <h2>Some more</h2>
          <p>
            Currently studying Software Engineering at Aalto University with a
            minor in Software and System Technologies. Currently working on my
            master&apos;s thesis about Developer Experience.
          </p>
          <p>
            I love to combine the technical and &quot;soft&quot; parts of
            software development and I think that developer&apos;s voice should
            be heard more.
          </p>
          <p>
            I want to create products that help people in their everyday life
            and make everyone a bit more productive and able to enjoy their life
            more.
          </p>
          <p>
            You can contact me at&nbsp;
            <a href="mailto:anders@andersnylund.com">anders@andersnylund.com</a>
          </p>
        </Container>
      </Page>
    </>
  </ThemeProvider>
);

export default About;
