import React from 'react'

import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  View,
} from 'react-native'

const Touchable = (props) =>
  Platform.OS === 'ios' ? (
    <TouchableOpacity activeOpacity={0.8} {...props} />
  ) : (
    <TouchableNativeFeedback
      //   delayPressIn={0}
      background={TouchableNativeFeedback.SelectableBackground()}
      {...props}>
      <View style={props.style}>{props.children}</View>
    </TouchableNativeFeedback>
  )

export default Touchable
