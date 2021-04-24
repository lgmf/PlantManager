import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { withLoading } from '../../design-system/components/hoc';

import PlantCard from './PlantCard';

const PlantsGridContainer = styled.View`
  flex: 1;
  margin: -10px;
`;

function PlantsGrid({ plants, onPlantSelected }) {
  return (
    <PlantsGridContainer>
      <FlatList
        data={plants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlantCard
            data={item}
            onPress={() => onPlantSelected(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </PlantsGridContainer>
  );
}

export default withLoading(PlantsGrid);
