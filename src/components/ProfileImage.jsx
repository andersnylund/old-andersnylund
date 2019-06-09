import React from 'react';
import styled from 'styled-components';

import Image from '../images/profile.jpg';

const StyledImage = styled.img`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileImage = () => <StyledImage src={Image} alt="profile" />;

export default ProfileImage;
