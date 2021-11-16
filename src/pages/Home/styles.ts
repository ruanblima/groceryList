import styled from 'styled-components/native';

import Icon from '~/components/Icon';

import { sfs } from '~/utils/responsibleText';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
`;

export const Image = styled.Image`
  height: 60px;
  width: 60px;
`;

export const ContainerList = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerSearch = styled.View`
  width: 100%;
  padding: 10px 0px;
  border-width: 9px;
  border-color: ${({ theme }) => theme.Colors.TITLE_TEXT};
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  padding: 5px 10px;
  font-size: 20px;
  width: 100%;
  border-radius: 10px;
`;

export const ContainerItem = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TitleCategory = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => theme.Colors.TITLE_TEXT};
  font-weight: bold;
`;

export const TitleItem = styled.Text`
  font-size: ${sfs(20)}px;
  margin-left: 20px;
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
`;

export const List = styled.FlatList`
  width: 100%;
  padding: 20px 0px;
`;

export const ListCategory = styled.FlatList`
  width: 100%;
  padding: 20px;
  margin-bottom: 100px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.Colors.BLUE};
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 50px;
`;

export const ContainerBottom = styled.View`
  height: 80px;
  width: 100%;
  padding: 10px;
  position: absolute;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.Colors.BLUE};
`;

export const IconList = styled(Icon).attrs(() => ({
  name: 'clipboard-list',
  size: 50,
  color: 'white',
  type: 'font-5',
}))``;
