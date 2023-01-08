import React, {useContext} from 'react';
import {CarContext} from '~/contexts/CarContext';
import NavigationMapComponent from '~/components/NavigationMapComponent/NavigationMapComponent';
import CloseButtonComponent from '~/components/CloseButtonComponent/CloseButtonComponent';
import InfoViewComponent from '~/components/InfoViewComponent/InfoViewComponent';
import DestinationMock from '~/utils/mocks/DestinationMock';
import {Container} from './styles';

const HomeScreen: React.FunctionComponent = () => {
  const {origin, carOrientation, carDistance, carTime, onRestart} =
    useContext(CarContext);

  return (
    <Container>
      <NavigationMapComponent
        origin={origin}
        destination={DestinationMock}
        carOrientation={carOrientation}
      />
      <CloseButtonComponent onClose={onRestart} />
      <InfoViewComponent
        onCancel={onRestart}
        distance={carDistance}
        time={carTime}
      />
    </Container>
  );
};

export default HomeScreen;
