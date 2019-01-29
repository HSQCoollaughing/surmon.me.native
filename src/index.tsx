/**
 * IOS entry.
 * @file IOS 入口文件
 * @module app/ios
 * @author Surmon <https://github.com/surmon-china>
 */

import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation";
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Articles from '@app/pages/articles';
// import Projects from '@app/pages/projects';
// import { About } from '@app/pages/about';
import { Guestbook } from '@app/pages/guestbook';
import colors from '@app/style/colors';

const commonHeaderStyle = {
  headerTintColor: colors.background,
  headerStyle: {
    backgroundColor: colors.primary,
  }
}

export enum ERootRoutes {
  Home = 'Home',
  Guestbook = 'Guestbook',
  About = 'About'
}

export enum EHomeRoutes {
  Articles = 'Articles',
  Detail = 'Detail'
}

// export const HomeStack = createStackNavigator({
  // [EHomeRoutes.Articles]: Articles,
  // [EHomeRoutes.Detail]: ArticleDetail
// });

// export const AboutStack = createStackNavigator({
//   About: {
//     screen: About,
//     navigationOptions: commonHeaderStyle
//   },
//   // Details: TestScreen,
// }, {
//   navigationOptions: {
//     tabBarIcon: <Text>a-icon</Text>
//   }
// });

export const GuestbookStack = createStackNavigator({
  Guestbook: {
    screen: Guestbook,
    navigationOptions: commonHeaderStyle
  },
}, {
  navigationOptions: {
    tabBarIcon: <Text>b-icon</Text>
  }
});

export const NavigatorStacks = {
  // [ERootRoutes.Home]: HomeStack,
  [ERootRoutes.Guestbook]: GuestbookStack,
  // [ERootRoutes.About]: AboutStack,
};

export const NavigatorBaseOpions = {
  initialRouteName: ERootRoutes.Guestbook
};
