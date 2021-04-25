import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { useNavigation, useRoute } from '@react-navigation/core';

import { Container } from '@design-system/components';

import { PlantInfo, PlantsNotificationForm, PlantTip } from './components';

import PlantsStorage from './PlantsStorage';

const PlantsSaveContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

const PlantsSaveTip = styled(PlantTip)`
  position: relative;
  bottom: 60px;
`;

function PlantSave() {
  const { params: { plant } } = useRoute();

  const navigation = useNavigation();

  async function savePlant(notificationTime) {
    await PlantsStorage.save({ ...plant, notificationTime });

    navigation.navigate('SuccessConfirmation', {
      emoji: '🤗',
      title: 'Tudo certo',
      subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado',
      ctaText: 'Muito obrigado :D',
      nextScreen: 'MyPlants',
    });
  }

  return (
    <ScrollView>
      <PlantsSaveContainer>
        <PlantInfo plant={plant} />

        <Container.Container>
          <PlantsSaveTip tipText={plant.water_tips} />

          <PlantsNotificationForm
            form={{ notificationTime: '' }}
            onSubmit={(values) => savePlant(values.notificationTime)}
          />
        </Container.Container>
      </PlantsSaveContainer>
    </ScrollView>
  );
}

export default PlantSave;
