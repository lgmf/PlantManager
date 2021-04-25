import React from 'react';
import styled from 'styled-components/native';

import waterDrop from '../../../images/waterdrop.png';

import { Colors } from '../../../design-system/palette';
import { Paragraph } from '../../../design-system/typography';

const PlantTipContainer = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${Colors.blue_light};
  border-radius: 20px;
  padding: 40px 20px;
`;

const WaterDropImage = styled.Image`
  margin-right: 16px;
`;

const PlantTipText = styled(Paragraph)`
  flex: 1;
  color: ${Colors.blue};
`;

function PlantTip({ tipText, style }) {
  return (
    <PlantTipContainer style={style}>
      <WaterDropImage source={waterDrop} />
      <PlantTipText>{tipText}</PlantTipText>
    </PlantTipContainer>
  );
}

export default PlantTip;
