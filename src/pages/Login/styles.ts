import styled from 'styled-components/native';

import { vs } from '~/utils/responsibleText';

export const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.Colors.BLUE,
}))``;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BLUE};
`;

export const ContainerImage = styled.View`
  flex: 0.4;
  justify-content: flex-end;
  align-items: center;
`;

export const TextLogin = styled.Text`
  color: ${({ theme }) => theme.Colors.BLUE};
  font-size: 55px;
`;

export const ContainerInputs = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.Colors.BLUE};
  font-size: 20px;
`;

export const ContainerButton = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  padding: 12px 60px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.Colors.WHITE};
`;

export const Image = styled.Image`
  height: ${vs(180)}px;
  width: ${vs(180)}px;
  margin-top: ${vs(40)}px;
`;
