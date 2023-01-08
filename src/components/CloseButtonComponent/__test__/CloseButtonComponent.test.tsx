import 'react-native';
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import CloseButtonComponent from '../CloseButtonComponent';

describe('CloseButtonComponent', () => {
  it('should call the onClose function correctly', () => {
    const onCloseMock = jest.fn();
    render(<CloseButtonComponent onClose={onCloseMock} />);

    fireEvent.press(screen.getByTestId('button-container'));

    expect(onCloseMock).toBeCalled();
  });
});
