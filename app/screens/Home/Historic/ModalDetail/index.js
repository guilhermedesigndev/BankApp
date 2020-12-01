import React from 'react';

import {
  Container,
  ModalDetailHistoric,
  ContainerContentModal,
  ContentModalView,
  HeaderModalView,
  InfoModalView,
  InfoGroup,
  ContainerTitleModal,
  TitleGroupModal,
  ButtonCloseModal,
} from './styles';

import Typography from '~/components/Typography';
import Icon from '~/components/Icons';

import * as theme from '~/styles/theme';

export default function ModalDetail({toggle, visible}) {
  return (
    <Container>
      <ModalDetailHistoric transparent={true} visible={visible}>
        <ContainerContentModal>
          <ContentModalView>
            <HeaderModalView>
              <ContainerTitleModal>
                <Icon
                  name="shopping-cart-outline"
                  color={theme.colors.white}
                  width={32}
                  height={32}
                />

                <TitleGroupModal>
                  <Typography gray base>
                    Café
                  </Typography>

                  <Typography h3 white>
                    Burguer King
                  </Typography>
                </TitleGroupModal>
              </ContainerTitleModal>

              <ButtonCloseModal onPress={toggle}>
                <Icon name="close-outline" color={theme.colors.gray} />
              </ButtonCloseModal>
            </HeaderModalView>

            <InfoModalView>
              <InfoGroup>
                <Typography gray base>
                  Address
                </Typography>

                <Typography h3 bold>
                  1197 Hall Valley Drive
                </Typography>
              </InfoGroup>

              <InfoGroup>
                <Typography gray base>
                  From card
                </Typography>

                <Typography h3 bold>
                  8289 0134 7646 8324
                </Typography>
              </InfoGroup>

              <InfoGroup>
                <Typography gray base>
                  Amount total
                </Typography>

                <Typography h3 bold>
                  -$120
                </Typography>
              </InfoGroup>
            </InfoModalView>
          </ContentModalView>
        </ContainerContentModal>
      </ModalDetailHistoric>
    </Container>
  );
}
