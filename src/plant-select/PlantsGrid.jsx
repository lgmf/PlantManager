import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { withLoading } from '../design-system/components/hoc';

import PlantCard from './PlantCard';

const PlantsGridContainer = styled.View`
  flex: 1;
  margin: -10px;
`;

function PlantsGrid({ plants }) {
  return (
    <PlantsGridContainer>
      <FlatList
        data={plants}
        renderItem={({ item }) => <PlantCard data={item} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </PlantsGridContainer>
  );
}

export default withLoading(PlantsGrid);
