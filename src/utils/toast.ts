
import Toast from 'react-native-root-toast';

export const showToast = (message: string): void => {
  Toast.show(message || '未知错误', {
    duration: 200,
    position: -70,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0
  });
}
