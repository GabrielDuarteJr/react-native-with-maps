import styled from 'styled-components/native';
import colors from '~/utils/colors';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 35%;
  align-items: center;
  justify-content: center;
  bottom: 8px;
`;

export const InfoView = styled.View`
  width: 90%;
  height: 100%;
  background-color: ${colors.white};
  border-radius: 8px;
  elevation: 2;
`;

export const DriverInfoView = styled.View`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  background-color: ${colors.grayLight};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-color: ${colors.grayIntermediate};
  border-bottom-width: 1px;
  padding-horizontal: 10px;
`;

export const AvatarView = styled.View`
  height: 100%;
  width: 20%;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
`;

export const DriverNameView = styled.View`
  height: 100%;
  width: 40%;
  justify-content: center;
`;

export const DriverNameText = styled.Text`
  font-family: 'SF UI Display';
  font-size: 17px;
  line-height: 20px;
  color: ${colors.darkBlue};
`;

export const RatingView = styled.View`
  flex-direction: row;
`;

export const DriverRatingsText = styled.Text`
  margin-left: 5px;
  font-family: 'SF UI Display';
  font-size: 15px;
  line-height: 18px;
  color: ${colors.blueLight};
`;

export const DriverContactView = styled.View`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-left: 15px;
`;

export const WayInfoView = styled.View`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: row;
  border-bottom-color: ${colors.grayIntermediate};
  border-bottom-width: 1px;
`;

export const IconsView = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const DotsView = styled.View`
  height: 25px;
  border-width: 1px;
  border-color: ${colors.blueLight};
  border-style: dashed;
`;

export const DotView = styled.View`
  width: 19px;
  height: 19px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 10px;
  border-color: ${colors.green};
  border-width: 2px;
`;

export const AdressesView = styled.View`
  width: 80%;
  height: 100%;
`;

export const OriginView = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
  border-bottom-color: ${colors.grayIntermediate};
  border-bottom-width: 1px;
`;

export const OriginText = styled.Text`
  font-family: 'SF UI Display';
  font-size: 16px;
  line-height: 20px;
  color: ${colors.darkBlue};
`;

export const DestinationView = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
`;

export const DestinationText = styled.Text`
  font-family: 'SF UI Display';
  font-size: 16px;
  line-height: 20px;
  color: ${colors.darkBlue};
`;

export const TravelInfoView = styled.View`
  width: 100%;
  height: 40%;
`;

export const TrevelParamsView = styled.View`
  flex-direction: row;
  height: 50%;
  width: 100%;
`;

export const ParamsView = styled.View`
  height: 100%;
  width: 25%;
  justify-content: center;
  align-items: center;
`;

export const ParamTitleText = styled.Text`
  font-family: 'SF UI Display';
  font-size: 13px;
  line-height: 16px;
  color: ${colors.blueLight};
  margin-bottom: 5px;
`;

export const ParamValueText = styled.Text`
  font-family: 'SF UI Display';
  font-size: 15px;
  line-height: 18px;
  color: ${colors.darkBlue};
`;

export const ButtonView = styled.View`
  height: 50%;
  width: 100%;
  align-items: center;
`;

export const CancelButtonTouchableOpacity = styled.TouchableOpacity`
  background-color: ${colors.darkBlue};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 90%;
`;

export const CancelButtonText = styled.Text`
  font-family: 'SF UI Display';
  font-size: 17px;
  line-height: 20px;
  color: ${colors.white};
`;
