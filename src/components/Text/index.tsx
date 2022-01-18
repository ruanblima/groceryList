import React from 'react';
import type { TextProps } from 'react-native';

import * as S from './styles';

interface NewTextProps {
  fontSize?: number;
}

export function NewText({
  fontSize = 16,
  children,
  ...rest
}: NewTextProps & TextProps) {
  return (
    <S.Text {...rest} fontSize={fontSize}>
      {children}
    </S.Text>
  );
}
