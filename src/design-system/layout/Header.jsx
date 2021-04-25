import React from 'react';
import styled from 'styled-components/native';

import Avatar from '../../images/avatar.svg';

import { useUserName } from '../../user-identification/hooks';

import { Title, Paragraph } from '../typography';

const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const Greeting = styled.View`
  align-items: flex-start;
`;

function Header() {
  const userName = useUserName();

  return (
    <HeaderContainer>
      <Greeting>
        <Paragraph>Olá,</Paragraph>
        <Title>{userName}</Title>
      </Greeting>
      <Avatar width={60} height={60} />
    </HeaderContainer>
  );
}

export default Header;
