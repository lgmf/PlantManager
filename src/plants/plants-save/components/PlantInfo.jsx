import React from 'react';
import styled from 'styled-components/native';

import { Colors } from '../../../design-system/palette';
import { Title, Paragraph } from '../../../design-system/typography';

import { PlantIcon } from '../../plants-select/components';

const PlantInfoTitle = styled(Title)`
  margin: 20px 0;
`;

const PlantInfoContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content:  center;
  align-items: center;
  background-color: ${Colors.shape};
  padding: 60px 20px;
`;

function PlantInfo({ plant }) {
  return (
    <PlantInfoContainer>
      <PlantIcon photo={plant.photo} />
      <PlantInfoTitle centered>{plant.name}</PlantInfoTitle>
      <Paragraph centered>{plant.about}</Paragraph>
    </PlantInfoContainer>
  );
}

export default PlantInfo;
