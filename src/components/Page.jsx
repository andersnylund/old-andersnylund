import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    ${props => props.theme.blue},
    ${props => props.theme.pink}
  );
  min-height: 100vh;
`;
