import React, { useState, useEffect } from 'react';

import { Container, Header } from '../../design-system/components';

import { useUserName } from '../../user-identification/hooks';

import { PlantTip } from '../plants-save/components';
import { useSavedPlants } from '../plants-save/PlantsStorage';

import { MyPlantsList } from './components';

function MyPlants() {
  const [nextWateredMessage, setNextWateredMessage] = useState('');

  const userName = useUserName();
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
      <Header userName={userName} />

      { nextWateredMessage && <PlantTip tipText={nextWateredMessage} />}

      <MyPlantsList plants={savedPlants} />
    </Container.Container>
  );
}

export default MyPlants;
