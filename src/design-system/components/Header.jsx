import React from 'react';
import styled from 'styled-components/native';

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

const Avatar = styled.View`
  background-color: gray;
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

function Header({ userName }) {
  return (
    <HeaderContainer>
      <Greeting>
        <Paragraph>Olá,</Paragraph>
        <Title>{userName}</Title>
      </Greeting>
      <Avatar />
    </HeaderContainer>
  );
}

export default Header;
