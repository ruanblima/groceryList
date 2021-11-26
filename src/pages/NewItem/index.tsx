import { useNavigation, useRoute } from '@react-navigation/native';
import cloneDeep from 'lodash/cloneDeep';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '~/components/Input';
import { Picker } from '~/components/Picker';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { CategoryProps } from '~/@types/entities/Category';
import { insertItemAction } from '~/store/ducks/grocery/actions';

import { insertItem } from './util';

import * as S from './styles';

export function NewItem() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const { item } = route.params;

  const [name, setName] = useState('');
  const [amount, setAmout] = useState('');
  const [category, setCategory] = useState<CategoryProps>();
  const [price, setPrice] = useState('');
  const [unity, setUnity] = useState('');
  const [image, setImage] = useState(
    'https://alumni.fsm.undip.ac.id/assets/img/berita/04-12-20-12-15-15.jpg',
  );

  const { categoryList } = useSelector(
    (state: AplicationState) => state.category,
  );
  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );

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
    const list = cloneDeep(groceryList);
    const newList = insertItem(
      list,
      category,
      name,
      amount,
      price,
      image,
      unity,
    );

    console.log('newList', newList);

    dispatch(insertItemAction(newList));

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
        <S.Label>Unidade</S.Label>
        <Input
          placeholder="Digite a unidade"
          borderBottom
          value={unity}
          onChangeText={setUnity}
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
          categories={categoryList}
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
