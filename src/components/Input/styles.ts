import styled from 'styled-components/native';

import Icon from '~/components/Icon';
import { NewText } from '~/components/Text';

interface IconInputProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

interface ContainerProps {
  labelSameLine?: boolean;
}

interface ContainerInputProps {
  error: string;
  labelSameLine?: boolean;
  borderBottom?: boolean;
}

interface TextInputProps {
  iconRight?: string;
  iconLeft?: string;
}

export const InputWrapper = styled.View``;

export const ContainerInputIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Touchable = styled.TouchableOpacity``;

export const Label = styled(NewText).attrs(({ theme }) => ({
  fontSize: theme.Sizes.FONTSIZE_INPUT_LABEL,
}))`
  color: ${({ theme }) => theme.Colors.FONT_INPUT};
`;

export const ContainerInput = styled.View<ContainerInputProps>`
  flex-direction: row;
  border-color: ${({ theme, error }) =>
    error ? theme.Colors.ERROR : theme.Colors.MEDIUM_GRAY};
  background-color: ${({ theme }) => theme.Colors.WHITE};
  margin-top: ${({ labelSameLine }) => (labelSameLine ? 0 : 10)}px;
  margin-left: ${({ labelSameLine }) => (labelSameLine ? 15 : 0)}px;
  width: ${({ labelSameLine }) => (labelSameLine ? '65%' : '100%')};
  border-radius: 2px;
  border-bottom-width: ${({ borderBottom }) => (borderBottom ? 1 : 0)}px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-radius: 10px;
`;

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: ${({ labelSameLine }) => (labelSameLine ? 'row' : 'column')};
  align-items: ${({ labelSameLine }) =>
    labelSameLine ? 'center' : 'flex-start'};
  justify-content: center;
`;

export const Input = styled.TextInput.attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.Colors.TEXT_CLICKABLE,
}))<TextInputProps>`
  width: ${({ iconRight }) => (iconRight ? 80 : 100)}%;
  margin-left: ${({ iconLeft }) => (iconLeft ? 10 : 0)}px;
  font-size: ${({ theme }) => theme.Sizes.FONTSIZE_INPUT}px;
  color: ${({ theme }) => theme.Colors.TEXT_NO_CLICKABLE};
`;
export const ErrorMessage = styled(NewText)`
  color: ${({ theme }) => theme.Colors.ERROR};
  margin-top: 15px;
  margin-left: 30px;
`;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({ theme, name, iconType }) => ({
    name,
    size: theme.Sizes.ICON_SIZE,
    type: iconType,
  }),
)<IconInputProps>`
  color: ${({ iconColor, theme }) =>
    iconColor || theme.Colors.ICON_COLOR_CLICKABLE};
`;
