import React from 'react';
import styled from 'styled-components/native';

import { Colors } from '@design-system/palette';
import { Fonts } from '@design-system/typography';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${Colors.green};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 20px;
`;

const ButtonText = styled.Text`
  fontFamily: ${Fonts.heading};
  fontSize: 16px;
  color: ${Colors.white};
`;

function Button({
  disabled,
  onPress,
  children,
  testID = 'button',
}) {
  return (
    <ButtonContainer
      testID={testID}
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <ButtonText>
        {children}
      </ButtonText>
    </ButtonContainer>
  );
}

export default Button;
