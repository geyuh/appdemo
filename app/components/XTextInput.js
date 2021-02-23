import React, { Component } from 'react'
import { StyleSheet, View, Image, TextInput, Platform } from 'react-native'
import Touchable from './Touchable'

class XTextInput extends Component {
  render() {
    return (
      <View style={[styles.inputView, this.props.containerStyle]}>
        <Image source={this.props.image ? this.props.image : {}} />
        <TextInput
          style={styles.input}
          clearButtonMode="while-editing"
          {...this.props}
        />
        {Platform.OS === 'android' &&
        this.props.value &&
        this.props.value.length > 0 ? (
          <Touchable
            style={styles.touch}
            onPress={() => {
              if (this.props.onClear) {
                this.props.onClear()
              }
            }}>
            <Image
              style={styles.img}
              source={require('../assets/images/icon_input_clear.png')}
            />
          </Touchable>
        ) : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ff9800',
    padding: 5,
  },
  input: {
    paddingHorizontal: 5,
    flex: 1,
    padding: 0,
  },
  touch: {
    padding: 5,
  },
  img: {
    width: 20,
    height: 20,
  },
})

export default XTextInput
