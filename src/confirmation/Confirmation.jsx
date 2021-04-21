import React from 'react';
import styled from 'styled-components/native';

import { Title, Subtitle } from '../design-system/typography';
import { Button, Container, Emoji } from '../design-system/components';

const Content = styled.View`
  width: 100%;
  flex: 0.7;
  align-items: center;
  justify-content: space-around;
`;

function ConfirmationScreen() {
  return (
    <Container.Container>
      <Content>
        <Emoji>
          😄
        </Emoji>

        <Title>
          Prontinho
        </Title>

        <Subtitle>
          Agora vamos começar a cuidar das suas
          plantinhas com muito cuidado.
        </Subtitle>

        <Button onPress={() => console.log('começar')}>
          Começar
        </Button>

      </Content>
    </Container.Container>
  );
}

export default ConfirmationScreen;
