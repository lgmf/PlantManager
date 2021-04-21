import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Subtitle, Title } from '../design-system/typography';
import { Button, Container } from '../design-system/components';

import wateringImage from '../images/watering.png';

const styles = StyleSheet.create({
  title: {
    width: 220,
  },
  image: {
    width: 292,
    height: 284,
  },
});

function Home() {
  return (
    <Container>
      <Title customStyles={styles.title}>
        Gerencie suas plantas de forma fácil
      </Title>

      <Image source={wateringImage} style={styles.image} />

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
