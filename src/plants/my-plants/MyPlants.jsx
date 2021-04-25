import React, { useState, useEffect } from 'react';

import { Header } from '../../design-system/layout';
import { Container } from '../../design-system/components';

import { PlantTip } from '../plants-save/components';
import { useSavedPlants } from '../plants-save/PlantsStorage';

import { EmptyState, MyPlantsList } from './components';

function MyPlants() {
  const [nextWateredMessage, setNextWateredMessage] = useState('');

  const [savedPlants, loading] = useSavedPlants();

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

      {
        !savedPlants.length
          ? <EmptyState />
          : (
            <>
              <PlantTip tipText={nextWateredMessage} />

              <MyPlantsList
                loading={loading}
                plants={savedPlants}
              />
            </>
          )
      }

    </Container.Container>
  );
}

export default MyPlants;
