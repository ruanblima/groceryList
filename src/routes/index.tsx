import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import Home from '~/pages/Home';
import Login from '~/pages/Login';

import { HOME_SCREEN, LOGIN_SCREEN } from '~/constants/routes';
import Theme from '~/themes';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ThemeProvider theme={Theme.light}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={LOGIN_SCREEN}
            screenOptions={{
              gestureEnabled: false,
              animationEnabled: false,
            }}
          >
            <Stack.Screen
              name={LOGIN_SCREEN}
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen name={HOME_SCREEN} component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
