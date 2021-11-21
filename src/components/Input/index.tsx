import React, { useContext } from 'react';
import type { TextInputProps } from 'react-native';
import { ThemeContext } from 'styled-components';

import { sfs } from '~/utils/responsibleText';

import * as S from './styles';

interface InputProps {
  label?: string;
  iconRight?: string;
  iconLeft?: string;
  iconType?: string;
  error?: any;
  borderBottom?: boolean;
  labelSameLine?: boolean;
  actionIcon?: () => void;
}

const Input: React.FC<TextInputProps & InputProps> = ({
  label,
  iconRight,
  iconLeft,
  labelSameLine,
  error,
  iconType,
  borderBottom,
  actionIcon,
  ...rest
}) => {
  const { Colors } = useContext(ThemeContext);

  return (
    <S.InputWrapper>
      <S.ContainerInputIcon>
        <S.Container labelSameLine={labelSameLine}>
          {label && <S.Label fontSize={sfs(9)}>{label}</S.Label>}
          <S.ContainerInput
            borderBottom={borderBottom}
            error={error}
            labelSameLine={labelSameLine}
          >
            {iconLeft && (
              <S.IconInput
                iconType={iconType}
                color={Colors.BLUE}
                name={iconLeft}
              />
            )}
            <S.Input {...rest} autoCapitalize="none" iconRight={iconRight} />
            {iconRight && (
              <S.Touchable onPress={() => actionIcon && actionIcon()}>
                <S.IconInput name={iconRight} color={Colors.BLUE} />
              </S.Touchable>
            )}
          </S.ContainerInput>
        </S.Container>
      </S.ContainerInputIcon>
      {error && <S.ErrorMessage fontSize={sfs(12)}>{error}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};
export default Input;
