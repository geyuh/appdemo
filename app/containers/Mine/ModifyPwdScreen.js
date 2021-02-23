import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { XButton, XTextInput, XToast } from '../../components'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

class IndexPage extends Component {
  static navigationOptions = {
    title: '修改密码',
  }
  constructor(props) {
    super(props)
    this.state = {
      buttonEnable: false,
      oldPassword: '',
      newPassword: '',
      verityPassword: '',
    }
  }

  _verity = () => {
    let buttonEnable = true
    const { newPassword, verityPassword } = this.state
    const regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,12}$/
    if (!regExp.test(newPassword) || !regExp.test(verityPassword)) {
      buttonEnable = false
    }
    this.setState({ buttonEnable })
  }

  render() {
    //console.log(name);
    const {
      buttonEnable,
      oldPassword,
      newPassword,
      verityPassword,
    } = this.state
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
            <XTextInput
              containerStyle={{ marginTop: 15, borderColor: '#DDD' }}
              value={oldPassword}
              placeholder="原密码"
              onChangeText={(text) =>
                this.setState({ oldPassword: text }, this._verity)
              }
              onClear={() => this.setState({ oldPassword: '' })}
            />
            <XTextInput
              containerStyle={{ marginTop: 15, borderColor: '#DDD' }}
              value={newPassword}
              placeholder="新密码"
              onChangeText={(text) =>
                this.setState({ newPassword: text }, this._verity)
              }
              onClear={() => this.setState({ newPassword: '' })}
            />
            <XTextInput
              containerStyle={{ marginTop: 15, borderColor: '#DDD' }}
              value={verityPassword}
              placeholder="确认新密码"
              onChangeText={(text) =>
                this.setState({ verityPassword: text }, this._verity)
              }
              onClear={() => this.setState({ verityPassword: '' })}
            />
            <Text style={{ color: '#999', fontSize: 12, paddingVertical: 10 }}>
              密码长度为8～12位；必须包含大、小写字母、数字、特殊字符
            </Text>
          </View>
          <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
            <XButton
              disabled={!buttonEnable}
              text="确定"
              onPress={() => {
                if (newPassword !== verityPassword) {
                  XToast.show('两次输入的密码不一致')
                  return
                }
                this._modify()
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
  static propTypes = {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
