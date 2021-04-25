import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Colors } from '@design-system/palette';
import { Paragraph } from '@design-system/typography';

const Label = styled(Paragraph)`
  margin-bottom: 8px;
`;

const StyledTextInput = styled.TextInput`
  width: 100%;
  border: 1px transparent;
  border-bottom-color: ${(props) => (props.focused ? Colors.green : Colors.gray)};
  color: ${Colors.heading};
  font-size: 18px;
  padding: 10px;
  text-align: center;
`;

const ErrorMessage = styled.Text`
  font-size: 14px;
  color: ${Colors.red};
`;

function TextInput({
  label,
  value,
  placeholder,
  onChange,
  touched,
  error,
  name,
  ...rest
}) {
  const [focused, setFocused] = useState(false);

  return (
    <>
      { label && <Label>{label}</Label>}

      <StyledTextInput
        type="number"
        name={name}
        value={value}
        placeholder={placeholder}
        focused={focused}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        onChangeText={onChange}
        {...rest}
      />

      {
        touched
        && Boolean(error)
        && (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        )
      }
    </>
  );
}

export default TextInput;
