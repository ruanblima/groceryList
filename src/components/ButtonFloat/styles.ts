import { StyleSheet } from 'react-native';
import { vs } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 40,
    marginTop: 20,
    width: vs(45),
    height: vs(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
