import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { Cart } from '~/pages/Cart';
import { Home } from '~/pages/Home';
import { Login } from '~/pages/Login';

import { Header } from '~/components/Header';

import { HOME_SCREEN, LOGIN_SCREEN, CART_SCREEN } from '~/constants/routes';
import Theme from '~/themes';

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ThemeProvider theme={Theme.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={LOGIN_SCREEN}>
            <Stack.Screen
              name={LOGIN_SCREEN}
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={HOME_SCREEN}
              component={Home}
              options={{
                header: props => <Header {...props} />,
              }}
            />
            <Stack.Screen
              name={CART_SCREEN}
              component={Cart}
              options={{
                header: props => (
                  <Header enableNavigation title="Carrinho" {...props} />
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
