import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ButtonFloat } from '~/components/ButtonFloat';

import { listCategory } from './mock';

// import { NEW_ITEM } from '~/constants/routes';

import * as S from './styles';

export function Home({ navigation }: any) {
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
    // navigation.navigate(NEW_ITEM, { item: null });
  };

  const goToCart = () => {
    // navigation.navigate(NEW_ITEM, { item: null });
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

      <S.List
        data={listCategory}
        extraData={listCategory}
        renderItem={renderCategory}
        keyExtractor={(itemCurrent, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      <ButtonFloat iconColor={Colors.WHITE} actionButton={goToNewItem} />
    </S.Container>
  );
}
