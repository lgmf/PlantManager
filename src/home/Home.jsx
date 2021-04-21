import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { Subtitle, Title } from '../design-system/typography';
import { IconButton, Container } from '../design-system/components';

import wateringImage from '../images/watering.png';

const HomeTitle = styled(Title)`
  text-align: center;
  width: 195px;
`;

const HomeImage = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

function Home() {
  return (
    <Container>
      <HomeTitle>
        Gerencie suas plantas de forma fácil
      </HomeTitle>

      <HomeImage source={wateringImage} resizeMode="contain" />

      <Subtitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você
        sempre que precisar.
      </Subtitle>

      <IconButton icon="chevron-right" />
    </Container>
  );
}

export default Home;
