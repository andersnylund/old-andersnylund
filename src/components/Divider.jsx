import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: ${props => props.theme.brown};
  height: 0.2rem;
  box-shadow: 1px 1px 1px ${props => props.theme.grey};
`;

const Divider = () => <StyledDiv />;

export default Divider;
