import styled from 'styled-components/native';

interface TextProps {
  colorText?: string;
}

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
`;

export const ContainerHeader = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
`;

export const TextLogin = styled.Text<TextProps>`
  color: ${({ colorText }) => colorText || '#0076ce'};
  font-size: 55px;
`;

export const ContainerInputs = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const InputLogin = styled.TextInput`
  width: 70%;
  height: 40px;
  border-width: 1px;
  border-color: black;
  margin-bottom: 20px;
  border-radius: 6px;
`;

export const ButtonText = styled.Text<TextProps>`
  color: #ffffff;
  font-size: 20px;
`;

export const ContainerButton = styled.View`
  flex: 0.1;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background: #0076ce;
`;
