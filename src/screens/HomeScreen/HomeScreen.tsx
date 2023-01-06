import React, {useEffect, useState, useMemo} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import VehicleLocationMock from '~/utils/mocks/VehicleLocationMock';

const GOOGLE_MAPS_APIKEY = '######################';

const HomeScreen = () => {
  const [origin, setOrigin] = useState(VehicleLocationMock[0]);
  const [originItemIndex, setOriginItemIndex] = useState(0);

  const destination = {
    latitude: -18.920112,
    longitude: -48.242071,
  };

  const originLoc = useMemo(
    () => ({
      latitude: origin.latitude,
      longitude: origin.longitude,
    }),
    [origin],
  );

  const destinationLoc = {
    latitude: destination.latitude,
    longitude: destination.longitude,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (originItemIndex < VehicleLocationMock.length) {
        const newOrigin = VehicleLocationMock[originItemIndex];
        setOrigin(newOrigin);
        setOriginItemIndex(originItemIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [originItemIndex]);

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: -18.920112,
        longitude: -48.242071,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
        mode="DRIVING"
      />
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  );
};

export default HomeScreen;
