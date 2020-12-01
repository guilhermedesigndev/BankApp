import React from 'react';

import {Wrapper, Container} from './styles';

import Header from './Header';
import CreditCard from './CreditCard';
import Actions from './Actions';
import FriendsInvite from './FriendsInvite';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <CreditCard />
        <Actions />
        <FriendsInvite />
      </Container>
    </Wrapper>
  );
}
