import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Title, Paragraph } from '../typography';

function useUserName() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    AsyncStorage
      .getItem('@plantManager:userName')
      .then((next) => setUserName(next));
  });

  return userName;
}

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

function Header() {
  const userName = useUserName();

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
