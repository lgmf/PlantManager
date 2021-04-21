import styled from 'styled-components/native';

import { Colors } from '../palette';

import Fonts from './Fonts';

const Subtitle = styled.Text`
  font-family: ${Fonts.text};
  font-size: 18px;
  text-align: center;
  padding: 0 20px;
  color: ${Colors.heading};
`;

export default Subtitle;
