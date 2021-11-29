import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { includes, filter, toUpper } from 'lodash';
import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { ButtonFloat } from '~/components/ButtonFloat';
import { ModalGlobal } from '~/components/Modal';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { GroceryProps } from '~/@types/entities/Grocery';
import type { ProductProps } from '~/@types/entities/Product';
import { CART_SCREEN, NEW_ITEM_SCREEN } from '~/constants/routes';

// import { NEW_ITEM } from '~/constants/routes';

import * as S from './styles';

type Props = NativeStackScreenProps<any, 'HomeScreen'>;

export function Home({ navigation }: Props) {
  const { Colors } = useContext(ThemeContext);

  const [visible, setVisible] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [list, setList] = useState<GroceryProps[] | []>([]);
  const [allListItems, setAllListItems] = useState<ProductProps[] | []>([]);
  const [listItemsFilter, setListItemsFilter] = useState<GroceryProps[] | []>(
    [],
  );

  const { username } = useSelector((state: AplicationState) => state.user);
  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );

  useEffect(() => {
    const newList: ProductProps[] | [] = [];
    groceryList.map((currentItem: GroceryProps) => {
      currentItem.listItems.map((item: ProductProps) => {
        return newList.push(item);
      });
      return null;
    });
    setAllListItems(newList);
  }, [groceryList]);

  useEffect(() => {
    const newList = groceryList.filter(
      (currentItem: GroceryProps) => currentItem.listItems.length !== 0,
    );
    setList(newList);
  }, [groceryList]);

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

  function showModal() {
    setVisible(true);
  }

  const goEditItem = (item: any) => {
    // navigation.navigate(NEW_ITEM, { item });
  };

  const renderItems = ({ item }: any) => {
    return (
      <S.ContainerItem onPress={() => showModal()}>
        <S.Image source={{ uri: item.image_url }} />
        <S.TitleItem>{item.name}</S.TitleItem>
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
    navigation.navigate(NEW_ITEM_SCREEN, { item: null });
  };

  const goToCart = () => {
    navigation.navigate(CART_SCREEN);
  };

  useEffect(() => {
    navigation.setOptions({
      iconRight: 'md-cart',
      iconType: 'ionicons',
      actionButtonRight: goToCart,
      iconColor: Colors.WHITE,
      title: `Bem vindo ${username}`,
    });
  }, [navigation, goToCart, Colors, username]);

  return (
    <S.Container>
      <S.ContainerSearch>
        <S.TextInput
          placeholder="Digite o nome do item"
          value={searchName}
          onChangeText={setSearchName}
        />
      </S.ContainerSearch>

      {listItemsFilter.length > 0 ? (
        <S.ListCategory
          data={listItemsFilter}
          extraData={listItemsFilter}
          renderItem={renderItems}
          keyExtractor={(itemCurrent, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <S.ListCategory
          data={list}
          extraData={list}
          renderItem={renderCategory}
          keyExtractor={(itemCurrent, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}

      <ButtonFloat iconColor={Colors.WHITE} actionButton={goToNewItem} />
      <S.ContainerBottom>
        <S.IconList />
        <S.ContainerBottomText>
          <S.ContainerAllItems>
            <S.TextBottom>Total de itens</S.TextBottom>
            <S.TextBottom>{allListItems.length}</S.TextBottom>
          </S.ContainerAllItems>
          <S.ContainerAllItems>
            <S.TextBottom>Valor total</S.TextBottom>
            <S.TextBottom>R$ 350,00</S.TextBottom>
          </S.ContainerAllItems>
        </S.ContainerBottomText>
      </S.ContainerBottom>
      <ModalGlobal visible={visible} setVisible={setVisible} />
    </S.Container>
  );
}
