import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '~/components/Input';

import groceries from '~/assets/images/groceries.png';
import { loginAction } from '~/store/ducks/user/actions';

import * as S from './styles';

export function Login() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    dispatch(loginAction(username, password));
  }

  return (
    <S.Container>
      <S.StatusBar />
      <S.ContainerImage>
        <S.Image source={groceries} />
      </S.ContainerImage>
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
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.ContainerButton>
    </S.Container>
  );
}
