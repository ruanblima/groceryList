import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import Input from '~/components/Input';

import { HOME_SCREEN } from '~/constants/routes';

import * as S from './styles';

type Props = NativeStackScreenProps<any, 'LoginScreen'>;

export function Login({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    navigation.navigate(HOME_SCREEN);
  }

  return (
    <S.Container>
      <S.StatusBar />
      <S.ContainerHeader>
        <S.TextLogin>Login</S.TextLogin>
      </S.ContainerHeader>
      <S.ContainerInputs>
        <Input
          iconLeft="person"
          iconType="ionicons"
          placeholder="Digite seu username"
          value={username}
          onChangeText={setUsername}
        />

        <Input
          iconLeft="lock"
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          actionIcon={() => setShowPassword(!showPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
        />
      </S.ContainerInputs>
      <S.ContainerButton>
        <S.Button onPress={() => handleLogin()}>
          <S.ButtonText>ENTRAR</S.ButtonText>
        </S.Button>
      </S.ContainerButton>
    </S.Container>
  );
}
