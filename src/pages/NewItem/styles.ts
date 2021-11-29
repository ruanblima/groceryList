import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px;

  background-color: white;
`;

export const TextTitle = styled.Text`
  color: black;
  font-size: 40px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.Sizes.FONTSIZE_INPUT_LABEL}px;
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
`;

export const ContainerInput = styled.View`
  flex: 0.2;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
  justify-content: center;
  align-items: flex-start;
`;

export const ContainerPicker = styled.View`
  flex: 0.6;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
`;

export const TextInput = styled.TextInput`
  padding: 20px 10px;
  font-size: 20px;
  width: 100%;
  border-radius: 10px;
  margin-top: 15px;
  background-color: #eeee;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.Colors.BLUE};
  margin: 40px 60px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;
