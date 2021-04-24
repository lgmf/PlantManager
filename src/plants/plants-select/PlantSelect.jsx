import React, { useState } from 'react';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/core';

import { Container, Header, Loader } from '../../design-system/components';
import { Paragraph } from '../../design-system/typography';

import useUserName from '../../user-identification/hooks/UseUserName';

import { usePlants, usePlantsEnvironments } from './hooks';

import { PlantsGrid, EnvironmentList } from './components';

const Hero = styled.View`
  margin-bottom: 32px;
`;

function PlantSelect() {
  const [selectedEnvironment, setSelectedEnvironment] = useState('');

  const navigation = useNavigation();

  const userName = useUserName();

  const [plants, loadingPlants] = usePlants(selectedEnvironment);
  const [environments, loadingEnvironments] = usePlantsEnvironments();

  if (loadingEnvironments) {
    return <Loader />;
  }

  return (
    <Container.Container>
      <Header userName={userName} />

      <Hero>
        <Paragraph>Em qual ambiente</Paragraph>
        <Paragraph>você quer colocar sua planta?</Paragraph>
      </Hero>

      <EnvironmentList
        environments={environments}
        active={selectedEnvironment}
        onChange={(next) => setSelectedEnvironment(next)}
      />

      <PlantsGrid
        loading={loadingPlants}
        plants={plants}
        onPlantSelected={(plant) => navigation.navigate('PlantSave', { plant })}
      />
    </Container.Container>
  );
}

export default PlantSelect;
