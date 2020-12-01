import React from 'react';

import {
  ContainerHeader,
  ContainerProfile,
  ProfilePhoto,
  ContainerNotifications,
  IndicatorNewNotification,
  IconNotificationContainer,
} from './styles';

import Typography from '~/components/Typography';
import Icons from '~/components/Icons';

export default function Header() {
  return (
    <ContainerHeader>
      <ContainerProfile>
        <ProfilePhoto
          source={{
            uri:
              'https://imagens.brasil.elpais.com/resizer/14WX26KlHqBVIveI0pcmzXRz87s=/768x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/CJNYCB45H4GE56DH5YB3AV7BX4.jpg',
          }}
        />

        <Typography marginLeft>Guilherme Costa</Typography>
      </ContainerProfile>

      <ContainerNotifications>
        <IndicatorNewNotification />

        <IconNotificationContainer>
          <Icons name="bell-outline" />
        </IconNotificationContainer>
      </ContainerNotifications>
    </ContainerHeader>
  );
}
