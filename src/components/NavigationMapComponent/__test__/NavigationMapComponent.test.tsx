import 'react-native';
import React from 'react';
import {render, cleanup, screen} from '@testing-library/react-native';
import NavigationMapComponent from '../NavigationMapComponent';

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

describe('NavigationMapComponent', () => {
  it('should render without crashing', () => {
    const cordinatesMock: Cordinates = {
      latitude: -18.914931,
      longitude: -48.244491,
    };

    const tree = render(
      <NavigationMapComponent
        origin={cordinatesMock}
        destination={cordinatesMock}
        carOrientation={20}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should display the cordinates correctly', () => {
    const cordinatesMock: Cordinates = {
      latitude: -18.914931,
      longitude: -48.244491,
    };

    render(
      <NavigationMapComponent
        origin={cordinatesMock}
        destination={cordinatesMock}
        carOrientation={20}
      />,
    );

    const cordinates = screen.getAllByText(cordinatesMock.toString());

    expect(cordinates[0]).toBeDefined();
  });

  it('should display the rotation correctly', () => {
    const cordinatesMock: Cordinates = {
      latitude: -18.914931,
      longitude: -48.244491,
    };

    render(
      <NavigationMapComponent
        origin={cordinatesMock}
        destination={cordinatesMock}
        carOrientation={20}
      />,
    );

    const rotation = screen.getByText('20');

    expect(rotation).toBeDefined();
  });
});
