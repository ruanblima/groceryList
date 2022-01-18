import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import cloneDeep from 'lodash/cloneDeep';
import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
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
  const [image, setImage] = useState('');

  const { categoryList } = useSelector(
    (state: AplicationState) => state.category,
  );
  const { groceryList } = useSelector(
    (state: AplicationState) => state.grocery,
  );

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
    if (category) {
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

      dispatch(insertItemAction(newList));

      navigation.goBack();
    }
  };

  const editItemList = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.ContainerInput>
        {image && <S.Image source={{ uri: image }} />}
        <S.Button onPress={() => pickImage()}>
          <S.ButtonText>Tirar foto</S.ButtonText>
        </S.Button>

        <S.Button onPress={() => selectImage()}>
          <S.ButtonText>Selecionar foto</S.ButtonText>
        </S.Button>

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
