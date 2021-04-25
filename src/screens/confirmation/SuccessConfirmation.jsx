import React from 'react';
import styled from 'styled-components/native';

import { useNavigation, useRoute } from '@react-navigation/core';

import { Title, Subtitle } from '@design-system/typography';
import { Button, Container, Emoji } from '@design-system/components';

const Content = styled.View`
  width: 100%;
  flex: 0.7;
  align-items: center;
  justify-content: space-around;
`;

function ConfirmationScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    emoji,
    title,
    subtitle,
    ctaText,
    nextScreen,
  } = route.params;

  return (
    <Container.Container>
      <Content>
        <Emoji>{emoji}</Emoji>

        <Title>{title}</Title>

        <Subtitle>{subtitle}</Subtitle>

        <Button onPress={() => navigation.navigate(nextScreen)}>
          {ctaText}
        </Button>

      </Content>
    </Container.Container>
  );
}

export default ConfirmationScreen;
