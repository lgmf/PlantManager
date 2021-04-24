import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { useRoute } from '@react-navigation/core';

import {
  Button,
  Container,
  Form,
  TextInput,
} from '../../design-system/components';
import { Title, Paragraph } from '../../design-system/typography';
import { Colors } from '../../design-system/palette';

import waterDrop from '../../images/waterdrop.png';

import { PlantIcon } from '../select/PlantCard';
import PlantsStorage from './PlantsStorage';

const PlantInfoTitle = styled(Title)`
  margin: 20px 0;
`;

const PlantInfo = styled.View`
  width: 100%;
  flex: 1;
  justify-content:  center;
  align-items: center;
  background-color: ${Colors.shape};
  padding: 60px 20px;
`;

const WaterDropImage = styled.Image`
  margin-right: 8px;
`;

const PlantTip = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${Colors.blue_light};
  border-radius: 20px;
  position: relative;
  bottom: 80px;
  padding: 40px 20px;
`;

function PlantSave() {
  const { params: { plant } } = useRoute();

  return (
    <ScrollView>
      <PlantInfo>
        <PlantIcon photo={plant.photo} />
        <PlantInfoTitle centered>{plant.name}</PlantInfoTitle>
        <Paragraph centered>{plant.about}</Paragraph>
      </PlantInfo>

      <Container.Container>
        <PlantTip>
          <WaterDropImage source={waterDrop} />
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Paragraph>
        </PlantTip>

        <Form.Form>
          <Form.Controls>
            <TextInput
              label="Informe o melhor horário para ser lembrado:"
              placeholder="hh:mm"
            />
          </Form.Controls>

          <Form.Actions>
            <Button onPress={() => PlantsStorage.save(plant)}>
              Cadastrar planta
            </Button>
          </Form.Actions>
        </Form.Form>
      </Container.Container>
    </ScrollView>
  );
}

export default PlantSave;
