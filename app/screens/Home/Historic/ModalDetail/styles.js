import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalDetailHistoric = styled.Modal``;

export const ContainerContentModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(41, 41, 41, 0.6);
`;

export const HeaderModalView = styled.View`
  flex-direction: row;
`;

export const ContentModalView = styled.View`
  background: ${theme.colors.white};
  border-radius: 20px;
  height: 320px;
  width: 80%;
`;

export const ContainerTitleModal = styled.View`
  background: ${theme.colors.primary};
  flex: 8;
  border-bottom-right-radius: 60px;
  border-top-left-radius: 20px;
  height: 100px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TitleGroupModal = styled.View`
  flex: 2;
  margin-left: 20px;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
  flex: 3;
  align-items: center;
  margin-top: 20px;
`;

export const InfoModalView = styled.View`
  padding: 20px;
  margin-top: 10px;
`;

export const InfoGroup = styled.View`
  margin-bottom: 20px;
`;
