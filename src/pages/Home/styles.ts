import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
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

export const ContainerItem = styled.View`
  justify-content: space-between;
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
  font-size: 20px;
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
`;

export const List = styled.FlatList`
  width: 100%;
  padding: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const ButtonIcon = styled.TouchableOpacity``;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.Colors.BLUE};
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 50px;
`;
