import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

import Input from '~/components/Input';
import { Picker } from '~/components/Picker';

import type { CategoryProps } from '~/@types/entities/Category';

import { mockCategory } from './mock';

import * as S from './styles';

export function NewItem() {
  const navigation = useNavigation();
  const route = useRoute();

  const { item } = route.params;

  const [name, setName] = useState('');
  const [amount, setAmout] = useState('');
  const [category, setCategory] = useState<CategoryProps>();
  const [price, setPrice] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: item ? 'Editar Item' : 'Adicionar Item',
    });
    if (item) {
      setName(item.name);
      setAmout(item.amount);
      setCategory(item.category);
      setPrice(item.price);
    }
  }, [item, navigation]);

  const newItemList = () => {
    navigation.goBack();
  };

  const editItemList = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.ContainerInput>
        <S.Label>Nome</S.Label>
        <Input
          placeholder="Digite o nome"
          borderBottom
          value={name}
          onChangeText={setName}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <S.Label>Quantidade</S.Label>
        <Input
          placeholder="Digite a quantidade"
          borderBottom
          value={amount}
          onChangeText={setAmout}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <S.Label>Preço</S.Label>
        <Input
          placeholder="Digite o preço do produto"
          borderBottom
          value={price}
          onChangeText={setPrice}
        />
      </S.ContainerInput>
      <S.ContainerPicker>
        <Picker
          categories={mockCategory}
          itemSelect={category?.name}
          setItem={setCategory}
          disabled={item}
        />
      </S.ContainerPicker>
      <S.Button onPress={item ? () => editItemList() : () => newItemList()}>
        <S.ButtonText>{item ? 'Editar' : 'Cadastrar'}</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
