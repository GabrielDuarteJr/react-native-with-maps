import React from 'react';
import {ButtonContainer, Button} from './styles';
import CloseIcon from '~/assets/icons/Close.svg';

interface CloseButtonIterface {
  onClose?: () => void;
}

const CloseButtonComponent: React.FunctionComponent<CloseButtonIterface> = ({
  onClose,
}) => {
  return (
    <ButtonContainer>
      <Button onPress={onClose} testID="button-container">
        <CloseIcon />
      </Button>
    </ButtonContainer>
  );
};

export default CloseButtonComponent;
