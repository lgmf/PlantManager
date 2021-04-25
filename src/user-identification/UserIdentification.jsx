import React from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Title } from '../design-system/typography';
import { Container, Emoji } from '../design-system/components';

import UserForm from './UserForm';
import { useUserName, saveUserName } from './hooks';

function UserIdentification() {
  const navigation = useNavigation();

  const userName = useUserName();

  async function saveAndNavigate(form) {
    try {
      await saveUserName(form.name);

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
      <Container.Content>
        <Emoji>
          😄
        </Emoji>

        <Title>
          Como podemos chamar você?
        </Title>

        <UserForm
          form={{ name: userName }}
          onSubmit={(values) => saveAndNavigate(values)}
        />

      </Container.Content>
    </Container.Container>
  );
}

export default UserIdentification;
