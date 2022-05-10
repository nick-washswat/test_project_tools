import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home as Screen001, NextScreen as Screen002} from 'v1/screens';
import {MainStackType} from 'v1/types/routeTypes';

const Stack = createNativeStackNavigator<MainStackType>();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="SCREEN001"
      screenOptions={{
        animationTypeForReplace: 'push',
        animation: Platform.OS === 'ios' ? 'default' : 'fade',
        headerShadowVisible: false,
        headerTitle: '',
      }}>
      <Stack.Screen
        name="SCREEN001"
        component={Screen001}
        options={{headerLeft: () => null}}
      />
      <Stack.Screen
        name="SCREEN002"
        component={Screen002}
        options={{headerLeft: () => null}}
      />
    </Stack.Navigator>
  );
};

const Layout = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default Layout;
