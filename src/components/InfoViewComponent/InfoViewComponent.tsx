import React from 'react';
import CallIcon from '~/assets/icons/Call.svg';
import MessageIcon from '~/assets/icons/Message.svg';
import StarIcon from '~/assets/icons/Star.svg';
import DotIcon from '~/assets/icons/Dot.svg';
import PointIcon from '~/assets/icons/Point.svg';
import CarBlackIcon from '~/assets/icons/CarBlack.svg';
import {
  Container,
  InfoView,
  DriverInfoView,
  AvatarView,
  Avatar,
  DriverNameView,
  DriverNameText,
  RatingView,
  DriverRatingsText,
  DriverContactView,
  WayInfoView,
  IconsView,
  DotsView,
  DotView,
  AdressesView,
  OriginView,
  OriginText,
  DestinationView,
  DestinationText,
  TravelInfoView,
  TrevelParamsView,
  ParamsView,
  ParamTitleText,
  ParamValueText,
  ButtonView,
  CancelButtonTouchableOpacity,
  CancelButtonText,
} from './styles';

interface InfoViewIterface {
  distance: number;
  time: string;
  onCancel?: () => void;
}

const InfoViewComponent: React.FunctionComponent<InfoViewIterface> = ({
  distance,
  time,
  onCancel,
}) => {
  return (
    <Container>
      <InfoView>
        <DriverInfoView>
          <AvatarView>
            <Avatar source={require('~/assets/images/Profile.png')} />
          </AvatarView>

          <DriverNameView>
            <DriverNameText>Gregory Smith</DriverNameText>

            <RatingView>
              <StarIcon />
              <DriverRatingsText>4.9</DriverRatingsText>
            </RatingView>
          </DriverNameView>

          <DriverContactView>
            <MessageIcon />
            <CallIcon />
          </DriverContactView>
        </DriverInfoView>

        <WayInfoView>
          <IconsView>
            <DotView>
              <DotIcon />
            </DotView>

            <DotsView />

            <PointIcon />
          </IconsView>

          <AdressesView>
            <OriginView>
              <OriginText>7958 Swift Village</OriginText>
            </OriginView>

            <DestinationView>
              <DestinationText>105 William St, Chicago, US</DestinationText>
            </DestinationView>
          </AdressesView>
        </WayInfoView>

        <TravelInfoView>
          <TrevelParamsView>
            <ParamsView>
              <CarBlackIcon />
            </ParamsView>

            <ParamsView>
              <ParamTitleText>Distance</ParamTitleText>
              <ParamValueText>{`${distance} km`}</ParamValueText>
            </ParamsView>

            <ParamsView>
              <ParamTitleText>Time</ParamTitleText>
              <ParamValueText>{time}</ParamValueText>
            </ParamsView>

            <ParamsView>
              <ParamTitleText>Price</ParamTitleText>
              <ParamValueText>$25.00</ParamValueText>
            </ParamsView>
          </TrevelParamsView>

          <ButtonView>
            <CancelButtonTouchableOpacity onPress={onCancel}>
              <CancelButtonText>Cancel Request</CancelButtonText>
            </CancelButtonTouchableOpacity>
          </ButtonView>
        </TravelInfoView>
      </InfoView>
    </Container>
  );
};

export default InfoViewComponent;
