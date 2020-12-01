import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

import Normalize from '~/helpers/escale';

export const ContainerFriendsInvite = styled.View`
  width: 100%;
  height: ${Normalize.verticalScale(100)}px;
  margin: ${Normalize.verticalScale(20)}px 0px;
  background: ${theme.colors.white};
`;

export const FriendsInviteList = styled.FlatList``;

export const FriendsContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const FriendsInviteContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: ${60 / 2}px;
  background: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const FriendsPhoto = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: ${60 / 2}px;
  margin-bottom: 10px;
`;
