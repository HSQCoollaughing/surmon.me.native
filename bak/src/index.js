/**
 * App main.
 * @file 应用根组件
 * @module app/main
 * @author Surmon <https://github.com/surmon-china>
 */

import React from 'react';
import { Navigator } from 'react-native';
import Layout from './layouts/layout';

const AppContainer = () =>
  <Navigator
    // 初始化路由
    initialRoute={{ component: Layout }}
    // configureScene: 配置场景动画 FloatFromBottom | PushFromRight
    configureScene={() => Navigator.SceneConfigs.PushFromRight}
    // 渲染场景
    renderScene={(route, navigator) => {
      return React.createElement(route.component, { ...route.passProps, navigator })
    }}
  />

export default AppContainer;
