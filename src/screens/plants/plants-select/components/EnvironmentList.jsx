import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import EnvironmentButton from './EnvironmentButton';

const EnvironmentContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

function EnvironmentList({ environments, active, onChange }) {
  function changeActive(environmentKey) {
    const nextActive = environmentKey === active ? '' : environmentKey;
    onChange(nextActive);
  }

  return (
    <EnvironmentContainer>
      <FlatList
        horizontal
        data={environments}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <EnvironmentButton
            active={item.key === active}
            onPress={() => changeActive(item.key)}
          >
            {item.title}
          </EnvironmentButton>
        )}
      />
    </EnvironmentContainer>
  );
}

export default EnvironmentList;
