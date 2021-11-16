import { StyleSheet } from 'react-native';
import { vs } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 40,
    marginBottom: 80,
    width: vs(55),
    height: vs(55),
    borderRadius: vs(27.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
