import React from 'react';
import styled from 'styled-components/native';

import { Colors } from '../../palette';

const ActivityIndicator = styled.ActivityIndicator`
  margin: 0 auto;
`;

function withLoading(Component) {
  return function ComponentWithLoading({ loading, ...rest }) {
    if (loading) {
      return <ActivityIndicator size="small" color={Colors.green_dark} />;
    }

    return <Component {...rest} />;
  };
}

export default withLoading;
