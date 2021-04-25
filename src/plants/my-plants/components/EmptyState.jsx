import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../../../design-system/components';
import { Paragraph } from '../../../design-system/typography';
import { Colors } from '../../../design-system/palette';

const EmptyStateContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Message = styled(Paragraph)`
  color: ${Colors.gray}
  margin-bottom: 20px;
`;

function EmptyState() {
  const navigation = useNavigation();

  return (
    <EmptyStateContainer>
      <Message>
        Nenhuma planta adicionada.
      </Message>

      <Button onPress={() => navigation.navigate('PlantSelect')}>
        Adicionar nova planta
      </Button>
    </EmptyStateContainer>
  );
}

export default EmptyState;
