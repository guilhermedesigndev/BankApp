import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import Normalize from '~/helpers/escale';

import * as theme from '~/styles/theme';

const windowWidth = Dimensions.get('screen').width;

export const CreditCardList = styled.FlatList``;

export const ContainerCreditCard = styled.View`
  position: relative;
  overflow: hidden;
  width: ${windowWidth - 40}px;
  height: ${Normalize.verticalScale(200)}px;
  background: ${theme.colors.white};
  border-radius: 20px;
  padding: 20px;
  margin-right: 10px;
`;

export const HeaderCreditCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentCreditCard = styled.View`
  margin-top: 20px;
`;

export const ContainerCredit = styled.View`
  flex-direction: row;
`;

export const FooterCreditCard = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const FlagCreditCard = styled.Image.attrs({
  resizeMode: 'center',
})`
  width: ${Normalize.verticalScale(40)}px;
  height: ${Normalize.verticalScale(40)}px;
`;

export const DotList = styled.FlatList``;

export const ContainerDot = styled.View`
  height: 10px;
  width: 10px;
  border-radius: ${10 / 2}px;
  background: ${(props) =>
    props.index === 0 ? theme.colors.primary : theme.colors.grayLight};
  margin-right: 5px;
`;

export const ContainerDotlist = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${Normalize.verticalScale(30)}px;
`;
