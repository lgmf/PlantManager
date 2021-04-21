import React from 'react';
import styled from 'styled-components/native';

import { Subtitle, Title } from '../design-system/typography';
import { Button, Container } from '../design-system/components';

import wateringImage from '../images/watering.png';

const HomeTitle = styled(Title)`
  width: 220px;
`;

const HomeImage = styled.Image`
  width: 292px;
  height: 284px;
`;

function Home() {
  return (
    <Container>
      <HomeTitle>
        Gerencie suas plantas de forma fácil
      </HomeTitle>

      <HomeImage source={wateringImage} />

      <Subtitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você
        sempre que precisar.
      </Subtitle>

      <Button>
        &gt;
      </Button>
    </Container>
  );
}

export default Home;
