import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from 'v1/screens';
import {MainStackType} from 'v1/types/routeTypes';

const Stack = createNativeStackNavigator<MainStackType>();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animationTypeForReplace: 'push',
        animation: Platform.OS === 'ios' ? 'default' : 'fade',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
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
