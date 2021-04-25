import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/core';

import { Subtitle, Title } from '../design-system/typography';
import { IconButton, Container } from '../design-system/components';

import wateringImage from '../images/watering.png';

const HomeImage = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

function Home() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <Container.Container>
      <Container.Content>
        <Title centered>
          Gerencie suas plantas de forma fácil
        </Title>

        <HomeImage source={wateringImage} resizeMode="contain" />

        <Subtitle>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você
          sempre que precisar.
        </Subtitle>

        <IconButton
          icon="chevron-right"
          onPress={handleStart}
        />
      </Container.Content>
    </Container.Container>
  );
}

export default Home;
