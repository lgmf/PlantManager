import styled from 'styled-components/native';

import { Colors } from '../palette';

import Fonts from './Fonts';

const Title = styled.Text`
  font-family: ${Fonts.heading};
  font-size: 28px;
  line-height: 34px;
  font-weight: bold;
  color: ${Colors.heading};
`;

export default Title;
