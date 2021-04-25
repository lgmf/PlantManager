import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { Paragraph } from '../../../design-system/typography';
import { Colors } from '../../../design-system/palette';

import { PlantIcon } from '../../plants-select/components';

const MyPlantsCardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${Colors.shape}
  border-radius: 20px;
`;

const MyPlantCardTitle = styled(Paragraph)`
  flex: 1;
  margin: 0 8px;
  font-size: 14px;
`;

const TimeMessage = styled(Paragraph)`
  font-size: 12px;
  flex: 0.4;
`;

function MyPlantCard({ plant }) {
  const [timeMessage, setTimeMessage] = useState('');

  useEffect(() => {
    setTimeMessage(`Regar às ${plant.notificationTime}`);
  }, [plant.notificationTime]);

  return (
    <MyPlantsCardContainer>
      <PlantIcon photo={plant.photo} />
      <MyPlantCardTitle bold>{plant.name}</MyPlantCardTitle>
      <TimeMessage>{timeMessage}</TimeMessage>
    </MyPlantsCardContainer>
  );
}

export default MyPlantCard;
