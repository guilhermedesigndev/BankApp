import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

import Normalize from '~/helpers/escale';

export const ContainerHistoric = styled.View`
  flex: 1;
  background: ${theme.colors.white};
  padding: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const ContainerLabelHistoric = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${Normalize.verticalScale(15)}px;
`;

export const HistoricList = styled.FlatList``;

export const SeparatorList = styled.View`
  margin: ${Normalize.verticalScale(10)}px 0px;
`;

export const ContainerItemHistoric = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerIcon = styled.View`
  width: 60px;
  height: 60px;
  border-radius: ${70 / 2}px;
  background: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const ContainerHistoricText = styled.View`
  margin-left: ${Normalize.verticalScale(15)}px;
`;

export const ContainerInfoHistoric = styled.View`
  flex-direction: row;
  align-items: center;
`;
