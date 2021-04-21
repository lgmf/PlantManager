import React from 'react';
import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

import { Colors } from '../palette';

import { ButtonContainer } from './Button';

const Icon = styled(Feather)`
  font-size: 32px;
  color: ${Colors.white}
`;

function IconButton({ icon }) {
  return (
    <ButtonContainer>
      <Icon name={icon} />
    </ButtonContainer>
  );
}

export default IconButton;
