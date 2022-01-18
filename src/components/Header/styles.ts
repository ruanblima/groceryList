import styled from 'styled-components/native';

import Icon from '~/components/Icon';
import { NewText } from '~/components/Text';

import { sfs, vs } from '~/utils/responsibleText';

interface Props {
  enableNavigation?: boolean;
  iconRight?: string;
}

export const Container = styled.View`
  height: ${vs(50)}px;
  width: 100%;
  background: ${({ theme }) => theme.Colors.BLUE};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.Colors.BLUE,
}))``;

export const ContainerTitle = styled.View<Props>`
  flex: ${({ enableNavigation, iconRight }) =>
    enableNavigation || iconRight ? 0.9 : 1};
  align-items: center;
  justify-content: center;
`;

export const Title = styled(NewText).attrs({
  fontSize: sfs(23),
})`
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const ButtonLeft = styled.TouchableOpacity`
  flex: 0.1;
  margin-left: 15px;
`;

export const IconColor = styled(Icon).attrs(({ theme }) => ({
  name: 'invert-colors',
  size: theme.Sizes.ICON_SIZE,
}))`
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
`;

export const IconBack = styled(Icon).attrs(({ theme }) => ({
  name: 'arrow-back',
  size: theme.Sizes.ICON_SIZE_BACK,
  color: theme.Colors.WHITE,
  type: 'ionicons',
}))``;

export const ButtonRight = styled.TouchableOpacity`
  flex: 0.2;
  margin-right: -30px;
`;

export const IconRight = styled(Icon).attrs(({ theme }) => ({
  size: theme.Sizes.ICON_SIZE_HEADER,
}))``;
