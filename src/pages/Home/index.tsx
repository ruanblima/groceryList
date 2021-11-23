import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ButtonFloat } from '~/components/ButtonFloat';

import { CART_SCREEN, NEW_ITEM_SCREEN } from '~/constants/routes';

import { listCategory } from './mock';

// import { NEW_ITEM } from '~/constants/routes';

import * as S from './styles';

type Props = NativeStackScreenProps<any, 'HomeScreen'>;

export function Home({ navigation }: Props) {
  const { Colors } = useContext(ThemeContext);

  const [searchName, setSearchName] = useState('');

  const goEditItem = (item: any) => {
    // navigation.navigate(NEW_ITEM, { item });
  };

  const renderItems = ({ item }: any) => {
    return (
      <S.ContainerItem>
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
      title: 'Bem vindo Ruan',
    });
  }, [navigation, goToCart, Colors]);

  return (
    <S.Container>
      <S.ContainerSearch>
        <S.TextInput
          placeholder="Digite o nome do item"
          value={searchName}
          onChangeText={setSearchName}
        />
      </S.ContainerSearch>

      <S.ListCategory
        data={listCategory}
        extraData={listCategory}
        renderItem={renderCategory}
        keyExtractor={(itemCurrent, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      <ButtonFloat iconColor={Colors.WHITE} actionButton={goToNewItem} />
      <S.ContainerBottom>
        <S.IconList />
        <S.ContainerBottomText>
          <S.ContainerAllItems>
            <S.TextBottom>Total de itens</S.TextBottom>
            <S.TextBottom>10</S.TextBottom>
          </S.ContainerAllItems>
          <S.ContainerAllItems>
            <S.TextBottom>Valor total</S.TextBottom>
            <S.TextBottom>R$ 350,00</S.TextBottom>
          </S.ContainerAllItems>
        </S.ContainerBottomText>
      </S.ContainerBottom>
    </S.Container>
  );
}
