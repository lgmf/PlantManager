import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { Colors } from '../../../design-system/palette';
import { Fonts } from '../../../design-system/typography';

const ButtonContainer = styled(RectButton)`
  background-color: ${(props) => (props.active ? Colors.green_light : Colors.shape)}
  padding: 12px 26px;
  border-radius: 12px;
  margin-right: 5px;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: ${(props) => (props.active ? Colors.green_dark : Colors.heading)};
  font-family: ${(props) => (props.active ? Fonts.heading : Fonts.text)};
`;

function EnvironmentButton({ active, onPress, children }) {
  return (
    <ButtonContainer active={active} onPress={onPress}>
      <ButtonText active={active}>
        {children}
      </ButtonText>
    </ButtonContainer>
  );
}

export default EnvironmentButton;
