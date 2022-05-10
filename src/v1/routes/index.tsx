import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from 'v1/screens';
import {MainStackType} from 'v1/types/routeTypes';

//draft
import UI006 from '../components/UI005';

const Stack = createNativeStackNavigator<MainStackType>();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="UI006"
      screenOptions={{
        animationTypeForReplace: 'push',
        animation: Platform.OS === 'ios' ? 'default' : 'fade',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="UI006"
        component={UI006}
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
