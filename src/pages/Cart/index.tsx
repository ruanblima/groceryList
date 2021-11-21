import React, { useState } from 'react';

import { listCategory } from '../Home/mock';

import * as S from './styles';

export function Cart() {
  const [searchName, setSearchName] = useState('');

  const removeItemCart = (item: any) => {
    console.log('remove');
  };

  const renderItems = ({ item }: any) => {
    return (
      <S.ContainerItem>
        <S.Item>
          <S.Image source={{ uri: item.image_url }} />
          <S.TitleItem>{item.name}</S.TitleItem>
        </S.Item>
        <S.IconTrash />
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
