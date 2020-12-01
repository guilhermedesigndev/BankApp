import React from 'react';

import {
  ContainerFriendsInvite,
  FriendsInviteList,
  FriendsContainer,
  FriendsInviteContainer,
  FriendsPhoto,
} from './styles';

import Typography from '~/components/Typography';
import Icon from '~/components/Icons';

import * as theme from '~/styles/theme';

const itensFriends = [
  {id: '01', image: null, label: 'Invite'},
  {
    id: '02',
    image:
      'https://timeline.canaltech.com.br/348109.700/vai-pa-onde-criador-de-pocoyo-acha-meme-brazuca-inteligente-e-divertido.jpg',
    label: 'Mon',
  },
  {
    id: '03',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2qj5oTdWDOV86WhSBdIrF35uci86RrTEVA&usqp=CAU',
    label: 'Sister',
  },
  {
    id: '04',
    image:
      'https://www.museudememes.com.br/wp-content/uploads/2020/06/FAUSTAO-7-1.jpeg',
    label: 'Love',
  },
  {
    id: '05',
    image:
      'https://comparaplano.com.br/app/uploads/2020/02/58cpp-whale-memes.jpg',
    label: 'Liza',
  },
];

export default function FriendsInvite() {
  function renderItemFriendsList({item}) {
    return (
      <FriendsContainer>
        {item.label === 'Invite' ? (
          <FriendsInviteContainer>
            <Icon name="arrow-downward-outline" color={theme.colors.white} />
          </FriendsInviteContainer>
        ) : (
          <FriendsPhoto source={{uri: item.image}} />
        )}

        <Typography base>{item.label}</Typography>
      </FriendsContainer>
    );
  }

  return (
    <ContainerFriendsInvite>
      <FriendsInviteList
        data={itensFriends}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItemFriendsList}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 6}}
      />
    </ContainerFriendsInvite>
  );
}
