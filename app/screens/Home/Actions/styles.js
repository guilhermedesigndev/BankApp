import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

import Normalize from '~/helpers/escale';

export const ContainerActions = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${Normalize.verticalScale(50)}px;
`;

export const ListActions = styled.FlatList``;

export const ActionItem = styled.View`
  width: ${Normalize.verticalScale(80)}px;
  margin-right: ${Normalize.verticalScale(10)}px;
  align-items: center;
`;

export const Action = styled.View`
  height: 60px;
  width: 60px;
  border-radius: ${60 / 2}px;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.primary};
`;
