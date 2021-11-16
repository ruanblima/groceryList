import { includes, filter, toUpper } from 'lodash';
import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ButtonFloat } from '~/components/ButtonFloat';

import { listCategory } from './mock';

// import { NEW_ITEM } from '~/constants/routes';

import * as S from './styles';

export function Home({ navigation }: any) {
  const { Colors } = useContext(ThemeContext);

  const [list, setList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [allListItems, setAllListItems] = useState([]);
  const [listItemsFilter, setListItemsFilter] = useState([]);

  const [checked, setChecked] = useState(false);

  const goEditItem = item => {
    // navigation.navigate(NEW_ITEM, { item });
  };

  const renderItems = ({ item }: any) => {
    return (
      <S.ContainerItem>
        <S.TitleItem>{item.name}</S.TitleItem>
        <S.ButtonIcon onPress={() => goEditItem(item)}>
          <S.IconEdit />
        </S.ButtonIcon>
      </S.ContainerItem>
    );
  };

  const renderCategory = ({ item }: any) => {
    return (
      <S.ContainerList>
        <S.TitleCategory>{item.name}</S.TitleCategory>
        {item.listItems && (
          <S.List
            data={item.listItems}
            extraData={item.listItems}
            renderItem={renderItems}
            keyExtractor={(itemCurrent, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
      </S.ContainerList>
    );
  };

  const goToNewItem = () => {
    // navigation.navigate(NEW_ITEM, { item: null });
  };

  const updateItemsFilter = () => {
    let itemsFilter = [];

    itemsFilter = filter(allListItems, item =>
      includes(toUpper(item.name), toUpper(searchName)),
    );

    setListItemsFilter(itemsFilter);
  };

  useEffect(() => {
    if (searchName) {
      updateItemsFilter();
    }
  }, [searchName, updateItemsFilter]);

  return (
    <S.Container>
      <S.ContainerSearch>
        <S.TextInput
          placeholder="Digite o nome do item"
          value={searchName}
          onChangeText={setSearchName}
        />
      </S.ContainerSearch>
      {searchName ? (
        <S.List
          data={listItemsFilter}
          extraData={listItemsFilter}
          renderItem={renderItems}
          keyExtractor={(itemCurrent, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <S.List
          data={listCategory}
          extraData={listCategory}
          renderItem={renderCategory}
          keyExtractor={(itemCurrent, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
      <ButtonFloat iconColor={Colors.WHITE} actionButton={goToNewItem} />
    </S.Container>
  );
}
