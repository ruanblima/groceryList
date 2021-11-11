import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import { HOME_SCREEN } from '~/constants/routes';

import * as S from './styles';

type Props = NativeStackScreenProps<'LoginScreen'>;

const Login: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    navigation.navigate(HOME_SCREEN);
  }

  return (
    <S.SafeArea>
      <S.Container>
        <S.ContainerHeader>
          <S.TextLogin colorText={username && password && '#7DB428'}>
            Login
          </S.TextLogin>
        </S.ContainerHeader>
        <S.ContainerInputs>
          <S.InputLogin
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
          />
          <S.InputLogin
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />
        </S.ContainerInputs>
        <S.ContainerButton>
          <S.Button onPress={() => handleLogin()}>
            <S.ButtonText>ENTRAR</S.ButtonText>
          </S.Button>
        </S.ContainerButton>
      </S.Container>
    </S.SafeArea>
  );
};

export default Login;
