
import React, { Component } from 'react';
import { BackHandler, StyleSheet, View, Text, WebView } from 'react-native';
// import colors from '@app/style/colors';
// import sizes from '@app/style/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center'
  },
  webview: {
    flex: 1,
    // width: sizes.screen.width,
    // height: sizes.screen.height,
    // marginTop: Platform.OS === 'ios' 
      // ? AppSizes.navbarHeight - 5
      // : AppSizes.navbarHeight + AppSizes.statusBarHeight
  }
});

export class Guestbook extends Component {

  static navigationOptions = {
    title: '百鸣苑',
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      canGoBack: false
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackAction.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackAction.bind(this));
  }

  // webview状态改变
  onNavigationStateChange(navState) {
    this.setState({ canGoBack: navState.canGoBack });
    // console.log(this.refs.webview);
  }

  // 返回上一页Webview
  backWebViewPrevPage() {
    this.refs.webview.goBack();
  }

  // 刷新当前webview
  reloadWebView() {
    this.refs.webview.reload();
  }

  handleBackAction() {
    // webview有回退页则返回
    if (this.state.canGoBack) {
      this.backWebViewPrevPage();

    // 否则执行路由返回解析
    } else {
      // HandleBackBtnPress.bind(this)();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.webview} 
          ref="webview"
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          source={{uri:'https://github.com/surmon-china?tab=repositories'}}
          onLoad={() => this.setState({loading: true})}
          onLoadEnd={() => this.setState({loading: false})}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
        />
      </View>
    )
  }
}
