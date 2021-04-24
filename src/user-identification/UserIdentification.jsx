import React from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Title } from '../design-system/typography';
import { Container, Emoji } from '../design-system/components';

import UserForm from './UserForm';

function UserIdentification() {
  const navigation = useNavigation();

  async function saveAndNavigate(form) {
    try {
      AsyncStorage.setItem('@plantManager:userName', form.name);
      navigation.navigate('Confirmation');
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
          form={{ name: '' }}
          onSubmit={(values) => saveAndNavigate(values)}
        />

      </Container.Content>
    </Container.Container>
  );
}

export default UserIdentification;
