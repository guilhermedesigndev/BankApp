import React from 'react';

import {ContainerActions, ListActions, ActionItem, Action} from './styles';

import Typography from '~/components/Typography';
import Icon from '~/components/Icons';

const dataItemsActions = [
  {id: '01', icon: 'download-outline', label: 'Refil My Card'},
  {id: '02', icon: 'credit-card-outline', label: 'Transfer to Card'},
  {id: '03', icon: 'smartphone-outline', label: 'Refil Cell Phone'},
];

export default function Actions() {
  function renderitemActions({item}) {
    return (
      <ActionItem>
        <Action>
          <Icon name={item.icon} color="#ffffff" />
        </Action>

        <Typography center medium marginTop>
          {item.label}
        </Typography>
      </ActionItem>
    );
  }

  return (
    <ContainerActions>
      <ListActions
        data={dataItemsActions}
        keyExtractor={(item) => item.id}
        renderItem={renderitemActions}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
      />
    </ContainerActions>
  );
}
