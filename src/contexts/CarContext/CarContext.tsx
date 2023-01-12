import React, {useState, useEffect, useCallback} from 'react';
import VehicleLocationMock from '~/utils/mocks/VehicleLocationMock';

export interface CarContextInterface {
  origin: Cordinates;
  carOrientation: number;
  carDistance: number;
  carTime: string;
  onRestart: () => void;
}

export const CarContext = React.createContext<CarContextInterface>({
  origin: VehicleLocationMock[0].cordinates,
  carOrientation: VehicleLocationMock[0].orientation,
  carDistance: VehicleLocationMock[0].distance,
  carTime: VehicleLocationMock[0].time,
  onRestart: () => null,
});

export const CarProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({children}) => {
  const [origin, setOrigin] = useState<Cordinates>(
    VehicleLocationMock[0].cordinates,
  );
  const [carOrientation, setCarOrientation] = useState<number>(
    VehicleLocationMock[0].orientation,
  );
  const [carDistance, setCarDistance] = useState<number>(
    VehicleLocationMock[0].distance,
  );
  const [carTime, setCarTime] = useState<string>(VehicleLocationMock[0].time);
  const [itemIndex, setItemIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex: number =
        itemIndex < VehicleLocationMock.length ? itemIndex : 0;

      const {cordinates, orientation, distance, time} =
        VehicleLocationMock[currentIndex];

      setOrigin(cordinates);
      setCarOrientation(orientation);

      setCarDistance(distance);
      setCarTime(time);

      setItemIndex(currentIndex + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [itemIndex]);

  const onRestart = useCallback(() => {
    const {cordinates, orientation, distance, time} = VehicleLocationMock[0];

    setOrigin(cordinates);
    setCarOrientation(orientation);

    setCarDistance(distance);
    setCarTime(time);

    setItemIndex(0);
  }, []);

  return (
    <CarContext.Provider
      value={{
        origin,
        carOrientation,
        carDistance,
        carTime,
        onRestart,
      }}>
      {children}
    </CarContext.Provider>
  );
};
