import React, {useRef} from 'react';
import {Dimensions} from 'react-native';
import {BoxShadow} from 'react-native-shadow';

import {
  CreditCardList,
  ContainerCreditCard,
  HeaderCreditCard,
  ContentCreditCard,
  ContainerCredit,
  FooterCreditCard,
  FlagCreditCard,
  ContainerDotlist,
  DotList,
  ContainerDot,
} from './styles';

import Normalize from '~/helpers/escale';

import Typography from '~/components/Typography';

const windowWidth = Dimensions.get('screen').width;

const shadowOpt = {
  width: windowWidth,
  height: Normalize.verticalScale(200),
  color: '#979797',
  border: 30,
  radius: 20,
  opacity: 0.1,
  x: 50,
  y: 30,
  style: {marginTop: 30},
};

const creditCards = [
  {
    id: '01',
    balance: '$17,580',
    number: '**** **** **** 0316',
    limit: '$250,000',
    cashback: '$1,350',
    validDate: '11/24',
  },
  {
    id: '02',
    balance: '$17,580',
    number: '**** **** **** 0316',
    limit: '$250,000',
    cashback: '$1,350',
    validDate: '11/24',
  },
  {
    id: '03',
    balance: '$17,580',
    number: '**** **** **** 0316',
    limit: '$250,000',
    cashback: '$1,350',
    validDate: '11/24',
  },
];

export default function CreditCard() {
  const listCardsCreditRef = useRef();

  function renderItemCreditCard({item}) {
    return (
      <ContainerCreditCard>
        <HeaderCreditCard>
          <Typography bold h2>
            {item.balance}
          </Typography>

          <Typography>{item.number}</Typography>
        </HeaderCreditCard>

        <ContentCreditCard>
          <ContainerCredit>
            <Typography flex1 base>
              Credit Limit
            </Typography>

            <Typography flex2 base>
              {item.limit}
            </Typography>
          </ContainerCredit>

          <ContainerCredit>
            <Typography flex1 base>
              Cashback
            </Typography>

            <Typography flex2 base>
              {item.cashback}
            </Typography>
          </ContainerCredit>
        </ContentCreditCard>

        <FooterCreditCard>
          <Typography base>{item.validDate}</Typography>

          <FlagCreditCard
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1024px-Mastercard_2019_logo.svg.png ',
            }}
          />
        </FooterCreditCard>
      </ContainerCreditCard>
    );
  }

  function renderItemDots({item, index}) {
    return <ContainerDot index={index} />;
  }

  return (
    <>
      <BoxShadow setting={shadowOpt}>
        <CreditCardList
          initialNumToRender={1}
          ref={listCardsCreditRef}
          data={creditCards}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItemCreditCard}
          contentContainerStyle={{paddingLeft: 16, paddingRight: 6}}
        />
      </BoxShadow>

      <ContainerDotlist>
        <DotList
          data={creditCards}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItemDots}
        />
      </ContainerDotlist>
    </>
  );
}
