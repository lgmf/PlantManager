import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Paragraph } from '../../../design-system/typography';
import { withLoading } from '../../../design-system/components/hoc';

import MyPlantCard from './MyPlantCard';

const MyPlantsListContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 20px;
`;

const MyPlantsListTitle = styled(Paragraph)`
  width: 100%;
  margin-bottom: 20px;
`;

function MyPlantsList({ plants }) {
  return (
    <MyPlantsListContainer>
      <MyPlantsListTitle bold>
        Próximas regadas
      </MyPlantsListTitle>

      <FlatList
        data={plants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MyPlantCard plant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </MyPlantsListContainer>
  );
}

export default withLoading(MyPlantsList);
