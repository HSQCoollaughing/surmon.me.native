/**
 * Android entry.
 * @file android 入口文件
 * @module app/android
 * @author Surmon <https://github.com/surmon-china>
 */

import React from 'react';
import { Navigator, AppRegistry } from 'react-native';
import Welcome from './src/layouts/welcome';

const AppContainer = () =>
  <Navigator
    initialRoute={{ component: Welcome }}
    configureScene={() => Navigator.SceneConfigs.FloatFromBottom}
    renderScene={(route, navigator) => {
      return React.createElement(route.component, { ...route.passProps, navigator })
    }}
  />

AppRegistry.registerComponent('blogApp', () => AppContainer);
