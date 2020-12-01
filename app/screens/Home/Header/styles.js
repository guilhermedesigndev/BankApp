import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

export const ContainerHeader = styled.View`
  margin: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfilePhoto = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: ${40 / 2}px;
`;

export const IndicatorNewNotification = styled.View`
  height: 10px;
  width: 10px;
  border-radius: ${20 / 2}px;
  background: ${theme.colors.red};
  position: absolute;
  right: 0;
  z-index: 200;
`;

export const IconNotificationContainer = styled.View`
  z-index: 100;
`;

export const ContainerNotifications = styled.View``;
