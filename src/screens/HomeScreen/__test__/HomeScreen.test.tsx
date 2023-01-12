import 'react-native';
import React from 'react';
import {render, screen, cleanup} from '@testing-library/react-native';
import VehicleLocationMock from '~/utils/mocks/VehicleLocationMock';
import HomeScreen from '../HomeScreen';

jest.mock('react-native-maps', () => {
  const {View, Text} = require('react-native');
  const MockMapView = (props: any) => {
    return <View>{props.children}</View>;
  };
  const MockMarker = (props: any) => {
    return (
      <View>
        <Text>{props.coordinate.toString()}</Text>
        <Text>{props.rotation}</Text>
        {props.children}
      </View>
    );
  };
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});

jest.mock('react-native-maps-directions', () => {
  const {View} = require('react-native');
  const MockMapDirectionsView = (props: any) => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapDirectionsView,
  };
});

afterEach(cleanup);

describe('HomeScreen', () => {
  it('should render without crashing', () => {
    const tree = render(<HomeScreen />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should display the props correctly', () => {
    render(<HomeScreen />);

    const initialPropCordinates = screen.getAllByText(
      VehicleLocationMock[0].cordinates.toString(),
    );
    const initialPropOrientation = screen.getAllByText(
      VehicleLocationMock[0].orientation.toString(),
    );
    const initialPropDistance = screen.getAllByText(
      `${VehicleLocationMock[0].distance.toString()} km`,
    );
    const initialPropTime = screen.getAllByText(
      VehicleLocationMock[0].time.toString(),
    );

    expect(initialPropCordinates[0]).toBeDefined();
    expect(initialPropOrientation[0]).toBeDefined();
    expect(initialPropDistance[0]).toBeDefined();
    expect(initialPropTime[0]).toBeDefined();
  });
});
