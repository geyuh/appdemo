import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Touchable from './Touchable';
class XButton extends React.PureComponent {
  static defaultProps = {
    text: '', //按钮文字
    textColor: 'white', //文字颜色
    textSize: 15, //文字大小
    textStyle: null, //文字默认样式

    backgroundColor: '#FF9800', //按钮背景颜色
    enableBackgroundColor: '#DDDDDD',

    borderRadius: 4, //圆角大小

    border: false,
    borderWidth: 1.5, //描边宽度
    borderColor: '#FF9800', //描边颜色

    buttonStyle: null, //按钮样式

    onPress: () => {},
    disabled: false, //不可用
  };

  render() {
    return (
      <Touchable disabled={this.props.disabled} onPress={this.props.onPress}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: this.props.disabled
                ? this.props.enableBackgroundColor
                : this.props.backgroundColor,

              borderRadius: this.props.borderRadius,
            },
            this.props.border
              ? {
                  borderWidth: this.props.borderWidth,
                  borderColor: this.props.borderColor,
                }
              : null,
            this.props.buttonStyle,
          ]}>
          <Text
            style={[
              { color: this.props.textColor, fontSize: this.props.textSize },
              this.props.textStyle,
            ]}>
            {this.props.text}
          </Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  image: {
    marginRight: 5,
  },
});

export default XButton;
