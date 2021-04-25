import styled from 'styled-components/native';

import { Colors } from '@design-system/palette';

import Fonts from './Fonts';

const Subtitle = styled.Text`
  font-family: ${Fonts.text};
  font-size: 18px;
  color: ${Colors.heading};
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
`;

export default Subtitle;
