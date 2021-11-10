import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { HOME_SCREEN } from '~/constants/routes';

import * as S from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();

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
