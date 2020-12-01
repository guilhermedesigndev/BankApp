import React, {useState} from 'react';

import {
  ContainerHistoric,
  ContainerLabelHistoric,
  HistoricList,
  SeparatorList,
  ContainerItemHistoric,
  ContainerIcon,
  ContainerHistoricText,
  ContainerInfoHistoric,
} from './styles';

import * as theme from '~/styles/theme';

import Typography from '~/components/Typography';
import Icon from '~/components/Icons';

import ModalDetail from './ModalDetail';

const dataHistoric = [
  {
    id: '01',
    name: 'Gas Station',
    value: '-60',
    category: 'Utilities',
    icon: 'archive-outline',
  },
  {
    id: '02',
    name: 'Store',
    value: '-20',
    category: 'Utilities',
    icon: 'briefcase-outline',
  },
  {
    id: '03',
    name: 'Store',
    value: '-20',
    category: 'Utilities',
    icon: 'briefcase-outline',
  },
];

export default function Historic() {
  const [showModalDetail, setShowModalDetail] = useState(null);

  function renderItemsHistoric({item}) {
    return (
      <ContainerItemHistoric onPress={() => setShowModalDetail(true)}>
        <ContainerInfoHistoric>
          <ContainerIcon>
            <Icon name={item.icon} color={theme.colors.white} />
          </ContainerIcon>

          <ContainerHistoricText>
            <Typography bold h3>
              {item.name}
            </Typography>

            <Typography gray base>
              {item.category}
            </Typography>
          </ContainerHistoricText>
        </ContainerInfoHistoric>

        <Typography bold h3>
          {item.value}
        </Typography>
      </ContainerItemHistoric>
    );
  }

  return (
    <ContainerHistoric>
      <ContainerLabelHistoric>
        <Typography gray>History</Typography>
        <Icon name="search-outline" color={theme.colors.gray} />
      </ContainerLabelHistoric>

      <HistoricList
        data={dataHistoric}
        keyExtractor={(item) => item.id}
        renderItem={renderItemsHistoric}
        ItemSeparatorComponent={() => <SeparatorList />}
      />

      <ModalDetail
        visible={showModalDetail}
        toggle={() => setShowModalDetail(null)}
      />
    </ContainerHistoric>
  );
}
