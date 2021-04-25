import React, { useState, useEffect } from 'react';

import { Header } from '../../design-system/layout';
import { Container } from '../../design-system/components';

import { PlantTip } from '../plants-save/components';
import { useSavedPlants } from '../plants-save/PlantsStorage';

import { MyPlantsList } from './components';

function MyPlants() {
  const [nextWateredMessage, setNextWateredMessage] = useState('');

  const savedPlants = useSavedPlants();

  useEffect(() => {
    const firstPlant = savedPlants[0];

    if (firstPlant) {
      const message = `Não esqueça de regar a ${firstPlant.name} no horário ${firstPlant.notificationTime}`;
      setNextWateredMessage(message);
    }
  }, [savedPlants]);

  return (
    <Container.Container>
      <Header />

      { Boolean(nextWateredMessage) && <PlantTip tipText={nextWateredMessage} />}

      <MyPlantsList plants={savedPlants} />
    </Container.Container>
  );
}

export default MyPlants;
