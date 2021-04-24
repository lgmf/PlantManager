import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Paragraph } from '../../../design-system/typography';
import { Colors } from '../../../design-system/palette';

import { PlantIcon } from '../../plants-select/components';

const MyPlantsContainer = styled.View`
  width: 100%;
  margin-top: 20px;
`;

const MyPlantsTitle = styled(Paragraph)`
  width: 100%;
  margin-bottom: 20px;
`;

const MyPlanCardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 10px;
  background-color: ${Colors.shape}
  border-radius: 20px;
`;

const TimeMessage = styled(Paragraph)`
  flex: 0.5;
`;

function MyPlantCard({ plant }) {
  const [timeMessage, setTimeMessage] = useState('');

  useEffect(() => {
    setTimeMessage(`Regar às ${plant.notificationTime}`);
  }, [plant.notificationTime]);

  return (
    <MyPlanCardContainer>
      <PlantIcon photo={plant.photo} />
      <Paragraph bold>{plant.name}</Paragraph>
      <TimeMessage>{timeMessage}</TimeMessage>
    </MyPlanCardContainer>
  );
}

function MyPlantsList({ plants }) {
  return (
    <MyPlantsContainer>
      <MyPlantsTitle bold>
        Próximas regadas
      </MyPlantsTitle>

      <FlatList
        data={plants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MyPlantCard plant={item} />}
      />
    </MyPlantsContainer>
  );
}

export default MyPlantsList;
