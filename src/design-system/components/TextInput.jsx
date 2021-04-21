import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Colors } from '../palette';

const StyledTextInput = styled.TextInput`
  width: 100%;
  border: 1px transparent;
  border-bottom-color: ${(props) => (props.focused ? Colors.green : Colors.gray)};
  color: ${Colors.heading};
  font-size: 18px;
  padding: 10px;
  text-align: center;
`;

function TextInput({ value, placeholder, onChange }) {
  const [focused, setFocused] = useState(false);

  return (
    <StyledTextInput
      value={value}
      placeholder={placeholder}
      focused={focused}
      onBlur={() => setFocused(false)}
      onFocus={() => setFocused(true)}
      onChangeText={onChange}
    />
  );
}

export default TextInput;
