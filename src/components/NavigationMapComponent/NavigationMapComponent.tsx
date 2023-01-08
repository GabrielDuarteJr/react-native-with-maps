import React, {useMemo} from 'react';
import {GOOGLE_MAPS_APIKEY} from 'react-native-dotenv';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import PinIcon from '~/assets/icons/Pin.svg';
import CarIcon from '~/assets/icons/Car.svg';
import colors from '~/utils/colors';
import {initialRegion} from '~/utils/constants';
import {mapStyle} from './styles';

interface NavigationMapInterface {
  origin: Cordinates;
  destination: Cordinates;
  carOrientation: number;
}

const NavigationMapComponent: React.FunctionComponent<
  NavigationMapInterface
> = ({origin, destination, carOrientation}) => {
  const originLoc = useMemo<Cordinates>(
    () => ({
      latitude: origin.latitude,
      longitude: origin.longitude,
    }),
    [origin],
  );

  const destinationLoc = useMemo<Cordinates>(
    () => ({
      latitude: destination.latitude,
      longitude: destination.longitude,
    }),
    [destination],
  );

  return (
    <MapView
      style={mapStyle}
      provider={PROVIDER_GOOGLE}
      initialRegion={initialRegion}
      showsPointsOfInterest={false}
      showsIndoors={false}
      showsUserLocation>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={6}
        strokeColor={colors.blue}
        mode="DRIVING"
        resetOnChange={false}
      />
      <Marker
        coordinate={origin}
        title={'Origin'}
        anchor={{x: 0.5, y: 0.5}}
        rotation={carOrientation}
        flat>
        <CarIcon />
      </Marker>
      <Marker
        coordinate={destination}
        title={'Destination'}
        anchor={{x: 0.5, y: 0.75}}
        flat>
        <PinIcon />
      </Marker>
    </MapView>
  );
};

export default NavigationMapComponent;
