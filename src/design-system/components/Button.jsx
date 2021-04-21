import React from 'react';
import styled from 'styled-components/native';

import { Colors } from '../palette';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${Colors.green};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 12px 20px;
`;

const ButtonText = styled.Text`
  color: ${Colors.white};
  fontSize: 24px;
`;

function Button({ children }) {
  return (
    <ButtonContainer activeOpacity={0.7}>
      <ButtonText>
        {children}
      </ButtonText>
    </ButtonContainer>
  );
}

export default Button;
