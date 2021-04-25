import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components/native';
import { useFocusEffect } from '@react-navigation/native';

import { Header } from '@design-system/layout';
import { Container } from '@design-system/components';

import { PlantTip } from '../plants-save/components';
import PlantsStorage from '../plants-save/PlantsStorage';

import { EmptyState, MyPlantsList } from './components';

const NextWateredTip = styled(PlantTip)`
  margin-bottom: 40px;
`;

function MyPlants() {
  const [loading, setLoading] = useState(false);
  const [savedPlants, setSavedPlants] = useState([]);
  const [nextWateredMessage, setNextWateredMessage] = useState('');

  const loadSavedPlants = useCallback(() => {
    async function listSavedPlants() {
      const next = await PlantsStorage.list();
      setSavedPlants(next);
      setLoading(false);
    }

    setLoading(true);
    listSavedPlants();
  }, []);

  const removeSavedPlant = useCallback((plant) => {
    async function remove() {
      const next = await PlantsStorage.remove(plant.id);
      setSavedPlants(next);
      setLoading(false);
    }

    setLoading(true);
    remove();
  }, []);

  useFocusEffect(loadSavedPlants);

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
              <NextWateredTip tipText={nextWateredMessage} />

              <MyPlantsList
                loading={loading}
                plants={savedPlants}
                onRemove={removeSavedPlant}
              />
            </>
          )
      }

    </Container.Container>
  );
}

export default MyPlants;
