import styled from 'styled-components/native';

import { Colors } from '../palette';

import Fonts from './Fonts';

const Title = styled.Text`
  width: 220px;
  font-family: ${Fonts.heading};
  font-size: 28px;
  line-height: 32px;
  font-weight: bold;
  color: ${Colors.heading};
  text-align: center;
`;

export default Title;
