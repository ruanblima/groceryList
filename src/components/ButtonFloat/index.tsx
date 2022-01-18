import React, { useContext } from 'react';
import { FAB } from 'react-native-paper';
import { ThemeContext } from 'styled-components';

import { styles } from './styles';

interface Props {
  iconColor: string;
  actionButton: () => void;
}

export function ButtonFloat({ actionButton, iconColor }: Props) {
  const { Colors } = useContext(ThemeContext);

  return (
    <FAB
      style={[styles.fab, { backgroundColor: Colors.BLUE }]}
      small
      icon=""
      color={iconColor}
      onPress={() => actionButton()}
    />
  );
}
