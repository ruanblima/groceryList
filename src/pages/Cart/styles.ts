import styled from 'styled-components/native';

import Icon from '~/components/Icon';
import { NewText } from '~/components/Text';

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
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Item = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const TitleCategory = styled(NewText)`
  font-size: 25px;
  color: ${({ theme }) => theme.Colors.TITLE_TEXT};
  font-weight: bold;
`;

export const TitleItem = styled(NewText)`
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

export const ContainerBottom = styled.View`
  height: 80px;
  width: 100%;
  padding: 10px;
  position: absolute;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.BLUE};
`;

export const ContainerAllItems = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ContainerBottomText = styled.View``;

export const TextBottom = styled(NewText)`
  font-size: ${sfs(20)}px;
  margin-left: 20px;
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const IconList = styled(Icon).attrs(({ theme }) => ({
  name: 'md-cart',
  size: 50,
  color: theme.Colors.WHITE,
  type: 'ionicons',
}))``;

export const IconTrash = styled(Icon).attrs(({ theme }) => ({
  name: 'trash-bin',
  size: 25,
  color: theme.Colors.ERROR,
  type: 'ionicons',
}))``;
