import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

import Login from '~/pages/Login';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Arquivo TS!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
