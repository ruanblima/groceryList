import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { Cart } from '~/pages/Cart';
import { Home } from '~/pages/Home';
import { Login } from '~/pages/Login';
import { NewItem } from '~/pages/NewItem';

import { Header } from '~/components/Header';

import type { AplicationState } from '~/@types/entities/AplicationState';
import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  CART_SCREEN,
  NEW_ITEM_SCREEN,
} from '~/constants/routes';
import Theme from '~/themes';

const Stack = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();

export function RootStack() {
  const { isLogged } = useSelector((state: AplicationState) => state.user);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ThemeProvider theme={Theme.light}>
        <NavigationContainer>
          {!isLogged ? (
            <Stack.Navigator initialRouteName={HOME_SCREEN}>
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
              <Stack.Screen
                name={NEW_ITEM_SCREEN}
                component={NewItem}
                options={{
                  header: props => (
                    <Header
                      enableNavigation
                      title="Cadastrar Produto"
                      {...props}
                    />
                  ),
                }}
              />
            </Stack.Navigator>
          ) : (
            <StackLogin.Navigator initialRouteName={LOGIN_SCREEN}>
              <StackLogin.Screen
                name={LOGIN_SCREEN}
                component={Login}
                options={{ headerShown: false }}
              />
            </StackLogin.Navigator>
          )}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
