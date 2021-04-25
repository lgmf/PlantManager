import React from 'react';
import styled from 'styled-components/native';

import LottieView from 'lottie-react-native';

import loadAnimation from '@images/load.json';

const LoaderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoaderView = styled(LottieView)`
  background-color: transparent;
  width: 200px;
  height: 200px;
`;

function Loader() {
  return (
    <LoaderContainer>
      <LoaderView
        source={loadAnimation}
        autoPlay
        loop
      />
    </LoaderContainer>
  );
}

export default Loader;
