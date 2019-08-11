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

  .email-link {
    color: ${props => props.theme.grey};
    text-shadow: 1px 1px 1px ${props => props.theme.pink};
    text-decoration: none;
  }

  .list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;

    li {
      padding: 5px 10px;
    }
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
            be heard more. I want to create products that help people in their
            everyday life and make everyone a bit more productive and able to
            enjoy their life more.
          </p>
          <p>
            During my career I have used the following technologies, more or
            less:
          </p>
          <ul className="list">
            <li>JavaScript</li>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>React</li>
            <li>Node</li>
            <li>Express.js</li>
            <li>Java</li>
            <li>Spring Framework</li>
            <li>Gatsby</li>
            <li>RestAPIs</li>
            <li>GraphQL</li>
            <li>Python</li>
            <li>Django</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Git</li>
            <li>Travis CI</li>
          </ul>
          <p>
            You can contact me at&nbsp;
            <a className="email-link" href="mailto:anders@andersnylund.com">
              anders@andersnylund.com
            </a>
          </p>
        </Container>
      </Page>
    </>
  </ThemeProvider>
);

export default About;
