import 'react-native';
import React from 'react';
import {
  fireEvent,
  render,
  screen,
  cleanup,
} from '@testing-library/react-native';
import InfoViewComponent from '../InfoViewComponent';

afterEach(cleanup);

describe('InfoViewComponent', () => {
  it('should display driver name correctly', () => {
    render(<InfoViewComponent distance={1.2} time="2 min" />);

    const driverName = screen.getByText('Gregory Smith');

    expect(driverName).toBeDefined();
  });

  it('should display driver stars correctly', () => {
    render(<InfoViewComponent distance={1.2} time="2 min" />);

    const driverStars = screen.getByText('4.9');

    expect(driverStars).toBeDefined();
  });

  it('should display the origin address correctly', () => {
    render(<InfoViewComponent distance={1.2} time="2 min" />);

    const origenAddress = screen.getByText('7958 Swift Village');

    expect(origenAddress).toBeDefined();
  });

  it('should display the destination address correctly', () => {
    render(<InfoViewComponent distance={1.2} time="2 min" />);

    const destinationAddress = screen.getByText('105 William St, Chicago, US');

    expect(destinationAddress).toBeDefined();
  });

  it('should display the distance correctly', () => {
    render(<InfoViewComponent distance={1.2} time="2 min" />);

    const destinationAddress = screen.getByText('1.2 km');

    expect(destinationAddress).toBeDefined();
  });

  it('should display in time correctly', () => {
    render(<InfoViewComponent distance={1.2} time="2 min" />);

    const destinationAddress = screen.getByText('2 min');

    expect(destinationAddress).toBeDefined();
  });

  it('should display the race value correctly', () => {
    render(<InfoViewComponent distance={1.2} time="2 min" />);

    const destinationAddress = screen.getByText('$25.00');

    expect(destinationAddress).toBeDefined();
  });

  it('should call the onCancel function correctly', () => {
    const onCancelMock = jest.fn();
    render(
      <InfoViewComponent distance={1.2} time="2 min" onCancel={onCancelMock} />,
    );

    fireEvent.press(screen.getByTestId('button-cancel-container'));

    expect(onCancelMock).toBeCalled();
  });
});
