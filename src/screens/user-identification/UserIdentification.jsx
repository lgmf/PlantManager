import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/core';

import { Title } from '@design-system/typography';
import { Container, Emoji } from '@design-system/components';

import { useUserActions } from '@store/user';

import UserForm from './UserForm';

const UserIdentificationContent = styled(Container.Content)`
  justify-content: center;
`;

const Hero = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

function UserIdentification() {
  const navigation = useNavigation();

  const { saveUserName } = useUserActions();

  function saveAndNavigate(form) {
    try {
      saveUserName(form.name);

      navigation.navigate('SuccessConfirmation', {
        emoji: '😄',
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        ctaText: 'Começar',
        nextScreen: 'Plants',
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <Container.Container>
      <UserIdentificationContent>
        <Hero>
          <Emoji>😄</Emoji>
          <Title>Como podemos chamar você?</Title>
        </Hero>

        <UserForm
          form={{ name: '' }}
          onSubmit={(values) => saveAndNavigate(values)}
        />
      </UserIdentificationContent>
    </Container.Container>
  );
}

export default UserIdentification;
