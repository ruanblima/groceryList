import React from 'react';

import * as S from './styles';

interface HeaderProps {
  enableNavigation?: boolean;
  title?: string;
  navigation: any;
  options: any;
}

export function Header({
  enableNavigation,
  title,
  navigation,
  options,
}: HeaderProps) {
  return (
    <S.Container>
      <S.StatusBar />
      {enableNavigation && (
        <S.ButtonLeft onPress={() => navigation.goBack()}>
          <S.IconBack />
        </S.ButtonLeft>
      )}
      <S.ContainerTitle
        enableNavigation={enableNavigation}
        iconRight={options?.iconRight}
      >
        <S.Title>{title || options?.title}</S.Title>
      </S.ContainerTitle>
      {options?.iconRight && (
        <S.ButtonRight onPress={() => options.actionButtonRight()}>
          <S.IconRight
            name={options?.iconRight}
            type={options.iconType}
            color={options.iconColor}
          />
        </S.ButtonRight>
      )}
    </S.Container>
  );
}

export const headerOption = {
  header: (props: any) => <Header {...props} />,
};
