import styled from 'styled-components/native';
import colors from '~/utils/colors';

export const ButtonContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 50px;
  justify-content: center;
  top: 5%;
  padding-horizontal: 5%;
`;

export const Button = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  border-radius: 30px;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  elevation: 1;
`;
