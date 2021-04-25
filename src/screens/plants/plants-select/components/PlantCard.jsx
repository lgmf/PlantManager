import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import styled from 'styled-components/native';

import { Colors } from '@design-system/palette';
import { Fonts } from '@design-system/typography';

const ButtonContainer = styled(RectButton)`
  max-width: 45%;
  width: 100%;
  background-color: ${Colors.shape}
  border-radius: 20px;
  align-items: center;
  padding: 10px;
  margin: 10px;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: ${Colors.green_dark};
  font-family: ${Fonts.heading};
`;

export function PlantIcon({ photo }) {
  return (
    <SvgFromUri
      uri={photo}
      width={70}
      height={70}
    />
  );
}

function PlantCard({ data, onPress }) {
  return (
    <ButtonContainer onPress={onPress}>
      <PlantIcon photo={data.photo} />
      <ButtonText>
        {data.name}
      </ButtonText>
    </ButtonContainer>
  );
}

export default PlantCard;
