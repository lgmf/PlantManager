import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Container, Header, Loader } from '../design-system/components';
import { Paragraph } from '../design-system/typography';

import { usePlants, usePlantsEnvironments } from './hooks';

import EnvironmentList from './EnvironmentList';
import PlantsGrid from './PlantsGrid';

const Hero = styled.View`
  margin-bottom: 32px;
`;

function PlantSelect() {
  const [selectedEnvironment, setSelectedEnvironment] = useState('');

  const [plants, loadingPlants] = usePlants(selectedEnvironment);

  const [environments, loadingEnvironments] = usePlantsEnvironments();

  if (loadingEnvironments) {
    return <Loader />;
  }

  return (
    <Container.Container>
      <Header />

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
      />
    </Container.Container>
  );
}

export default PlantSelect;
