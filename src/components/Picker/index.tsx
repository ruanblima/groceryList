import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components/native';

import type { CategoryProps } from '~/@types/entities/Category';

import * as S from './styles';

interface Props {
  itemSelect: any;
  setItem: (item: any) => void;
  categories: CategoryProps[];
  disabled: boolean;
}

export function Picker({ itemSelect, setItem, categories, disabled }: Props) {
  const [showList, setShowList] = useState(false);
  const { Colors } = useContext(ThemeContext);

  const selectItem = (item: any) => {
    setItem(item);
    setShowList(false);
  };

  const renderItems = ({ item }: any) => {
    return (
      <S.Touchable onPress={() => selectItem(item)}>
        <S.ContainerList>
          <S.TitleItem>{item.name}</S.TitleItem>
        </S.ContainerList>
      </S.Touchable>
    );
  };

  return (
    <S.Container>
      <S.Label>Categoria</S.Label>
      <S.ContainerPicker>
        <S.Touchable disabled={disabled} onPress={() => setShowList(!showList)}>
          <S.PlaceholderText>
            {itemSelect || 'Selecione a categoria'}
          </S.PlaceholderText>
          <S.IconPicker
            color={Colors.TEXT_CLICKABLE}
            size={20}
            type="font-5"
            name={showList ? 'angle-up' : 'angle-down'}
          />
        </S.Touchable>

        {showList && (
          <S.List
            data={categories}
            extraData={categories}
            renderItem={renderItems}
            keyExtractor={(item: any) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
      </S.ContainerPicker>
    </S.Container>
  );
}

export default Picker;
