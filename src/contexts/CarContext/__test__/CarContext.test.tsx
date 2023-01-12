import {Text} from 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import VehicleLocationMock from '~/utils/mocks/VehicleLocationMock';
import {CarContext, CarProvider, CarContextInterface} from '../CarContext';

describe('CarContext', () => {
  const customRender = (
    ui: React.ReactElement<{children?: JSX.Element | JSX.Element[]}>,
    providerProps: CarContextInterface,
  ) => {
    return render(
      <CarContext.Provider value={providerProps}>{ui}</CarContext.Provider>,
    );
  };

  it('should display the props correctly', () => {
    const providerProps: CarContextInterface = {
      origin: VehicleLocationMock[0].cordinates,
      carOrientation: VehicleLocationMock[0].orientation,
      carDistance: VehicleLocationMock[0].distance,
      carTime: VehicleLocationMock[0].time,
      onRestart: () => null,
    };

    customRender(
      <CarContext.Consumer>
        {(value: CarContextInterface) => <Text>{value.toString()}</Text>}
      </CarContext.Consumer>,
      providerProps,
    );

    const props = screen.getByText(providerProps.toString());

    expect(props).toBeDefined();
  });

  it('should change the props correctly', () => {
    const initialProps: CarContextInterface = {
      origin: VehicleLocationMock[0].cordinates,
      carOrientation: VehicleLocationMock[0].orientation,
      carDistance: VehicleLocationMock[0].distance,
      carTime: VehicleLocationMock[0].time,
      onRestart: () => null,
    };

    const nextProps: CarContextInterface = {
      origin: VehicleLocationMock[10].cordinates,
      carOrientation: VehicleLocationMock[10].orientation,
      carDistance: VehicleLocationMock[10].distance,
      carTime: VehicleLocationMock[10].time,
      onRestart: () => null,
    };

    render(
      <CarProvider>
        <CarContext.Consumer>
          {(value: CarContextInterface) => <Text>{value.toString()}</Text>}
        </CarContext.Consumer>
      </CarProvider>,
    );

    const initialPropsReceived = screen.getByText(initialProps.toString());
    const nextPropsReceived = screen.getByText(nextProps.toString());

    expect(initialPropsReceived).toBeDefined();
    expect(nextPropsReceived).toBeDefined();
  });
});
