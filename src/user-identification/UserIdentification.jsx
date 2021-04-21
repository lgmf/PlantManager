import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/core';

import { Title } from '../design-system/typography';
import {
  Button,
  Container,
  Emoji,
  Form,
  TextInput,
} from '../design-system/components';

function UserIdentification() {
  const [name, setName] = useState('');

  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate('Confirmation');
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

        <Form.Form>
          <Form.Controls>
            <TextInput
              value={name}
              placeholder="Digite um nome"
              onChange={(value) => setName(value)}
            />
          </Form.Controls>

          <Form.Actions>
            <Button onPress={handleSubmit}>
              Confirmar
            </Button>
          </Form.Actions>
        </Form.Form>
      </Container.Content>
    </Container.Container>
  );
}

export default UserIdentification;
