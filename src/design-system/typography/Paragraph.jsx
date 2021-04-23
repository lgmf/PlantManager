import styled from 'styled-components/native';

import { Colors } from '../palette';

import Fonts from './Fonts';

const Paragraph = styled.Text`
  font-family: ${Fonts.text};
  font-size: 17px;
  line-height: 20px;
  color: ${Colors.heading};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export default Paragraph;
