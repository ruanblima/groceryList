import React from 'react';

import { CategoryProps } from '~/@types/entities/Category';

import { listCategory } from './mock';

import * as S from './styles';

const Home: React.FC = () => {
  function renderProduct({ item }: any) {
    return (
      <S.ContainerProduct>
        <S.ProductText>{item.name}</S.ProductText>
      </S.ContainerProduct>
    );
  }

  function renderCategory({ item }: any) {
    return (
      <S.ContainerCategory>
        <S.CategoryText>{item.name}</S.CategoryText>
        <S.ListProducts
          data={item.listItems}
          extraData={item.listItems}
          keyExtractor={(itemCurrent, index) => String(index)}
          renderItem={renderProduct}
        />
      </S.ContainerCategory>
    );
  }

  return (
    <S.Container>
      <S.ListCategory
        data={listCategory}
        extraData={listCategory}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderCategory}
      />
    </S.Container>
  );
};

export default Home;
