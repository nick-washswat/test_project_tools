/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {RecoilRoot} from 'recoil';

const AppRoot = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

AppRegistry.registerComponent(appName, () => AppRoot);
