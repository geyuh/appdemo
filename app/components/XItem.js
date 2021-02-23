/* eslint-disable react-native/no-inline-styles */
/**
 *
 * @ author: geyuhui
 * @ email:
 * @ data:
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Touchable from './Touchable';
class XItem extends Component {
  static defaultPorps = {
    height: 50,
    image: null,
    subImage: null,
    title: '',
    subTitle: '',
    titleStyle: null,
    subTitleStyle: null,
    hideChevron: false,
    hideSub: false,
    hideSeparator: false,
    separatorStyle: null,
    onPress: () => {},
  };
  render() {
    const {
      height,
      image,
      title,
      subTitle,
      titleStyle,
      subImage,
      subTitleStyle,
      hideChevron,
      hideSub,
      hideSeparator,
      separatorStyle,
      onPress,
    } = this.props;
    return (
      <Touchable onPress={onPress} style={styles.container}>
        <View
          style={{
            height: height,
            paddingHorizontal: 15,
            paddingVertical: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {image && <Image resizeMode="contain" source={image} />}
            <Text
              style={[
                { marginLeft: image ? 15 : 0, color: '#333', fontSize: 15 },
                titleStyle,
              ]}>
              {title}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            {subImage && <Image source={subImage} />}
            {!hideSub && (
              <Text
                style={[
                  { marginHorizontal: 5, color: '#666', fontSize: 14 },
                  subTitleStyle,
                ]}>
                {subTitle}
              </Text>
            )}

            {!hideChevron && (
              <Image source={require('../assets//images/icon_arrow.png')} />
            )}
          </View>
        </View>
        {!hideSeparator && (
          <View
            style={[
              {
                height: 1,
                backgroundColor: '#eee',
                marginLeft: image ? 50 : 15,
              },
              separatorStyle,
            ]}
          />
        )}
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
  },
});

export default XItem;
