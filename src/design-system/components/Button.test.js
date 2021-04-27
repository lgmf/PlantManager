import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Button from './Button';

describe('design system / components / button', () => {
  const testID = 'button';

  it('should renders correctly', () => {
    const component = render(
      <Button>
        click me
      </Button>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should call on press', () => {
    const onPress = jest.fn();

    const component = render(
      <Button
        testID={testID}
        onPress={onPress}
      />,
    );

    const button = component.getByTestId(testID);
    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
