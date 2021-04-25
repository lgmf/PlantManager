import React, { useState, useEffect } from 'react';
import { Alert, Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

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

const RemoveButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RemoveButton = styled(RectButton)`
  padding: 18px;
  backgroundColor: ${Colors.red};
  border-radius: 20px;
`;

function MyPlantCard({ plant, onRemove }) {
  const [timeMessage, setTimeMessage] = useState('');

  function handleRemove() {
    Alert.alert('Remover', `Deseja remover a ${plant.name}`, [
      {
        text: 'Não 🙏',
        style: 'cancel',
      },
      {
        text: 'Sim 😥',
        onPress: onRemove,
      },
    ]);
  }

  function renderRightActions() {
    return (
      <Animated.View>
        <RemoveButtonContainer>
          <RemoveButton onPress={handleRemove}>
            <Feather
              name="trash"
              size={32}
              color={Colors.white}
            />
          </RemoveButton>
        </RemoveButtonContainer>
      </Animated.View>
    );
  }

  useEffect(() => {
    setTimeMessage(`Regar às ${plant.notificationTime}`);
  }, [plant.notificationTime]);

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={renderRightActions}
    >
      <MyPlantsCardContainer>
        <PlantIcon photo={plant.photo} />
        <MyPlantCardTitle bold>{plant.name}</MyPlantCardTitle>
        <TimeMessage>{timeMessage}</TimeMessage>
      </MyPlantsCardContainer>
    </Swipeable>
  );
}

export default MyPlantCard;
