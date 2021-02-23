import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native'
// import { CommonActions } from '@react-navigation/native';
import Button from './../components/Button'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'
import storage from '../utils/storage'

const mapStateToProps = (state) => ({
  users: _.get(state, 'userList.userList', []),
})

const mapDispatchToProps = (dispatch) => ({
  GET_UserList: (payload, callback, loading) =>
    dispatch({ type: 'userList/GET_UserList', payload, callback, loading }),
  Login: (payload) => dispatch({ type: 'userList/Login', payload }),
})

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      passWord: '',
    }
  }

  static navigationOptions = {
    headerLeft: () => {
      //   return <Button color="lightblue" title="扫一扫" onPress={() => {}} />;
      return (
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => {
            this._saoyisao
          }}
          //   onPress={() => {
          //   alert('哈哈');
          // console.log(this.props);
          // this.props.navigation.navigate.push('BarCodePage');
          //   }}
        >
          <Text>扫一</Text>
        </TouchableOpacity>
      )
    },
  }
  _saoyisao = () => {
    console.log('this', this)
  }
  _login = () => {
    // this.props.Login({page: 1, count: 2, type: 'video'});
    // this.props.Login('admin');
    // console.log(this.props.navigation);
    // this.props.navigation.push('Test');
    storage.set('userToken', 'hahaha')
    // AsyncStorage.setItem('id', '0001');
    this.props.navigation.navigate('Home')
  }
  _register = () => {
    this.props.navigation.push('注册', {
      id: '111',
    })
  }
  render() {
    const { props } = this
    // const { navigation } = props;
    // console.log(this.props.Login);

    return (
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={styles.container}>
        <Image
          source={require('../assets/images/home/icon_star_full.png')}
          //   style={{width: 80, height: 80}}
        />
        <View style={styles.input}>
          <Input
            placeholder="Username"
            leftIcon={<Icon name="user" size={24} color="white" />}
            inputStyle={{ color: 'white' }}
            onChangeText={(value) => this.setState({ userName: value })}
          />
          <Input
            placeholder="Password"
            leftIcon={<Icon name="car" size={24} color="white" />}
            inputStyle={{ color: 'white' }}
            onChangeText={(value) => this.setState({ passWord: value })}
          />
        </View>
        <View style={styles.btnBox}>
          <Button
            style={styles.btn}
            {...props}
            onPress={this._login}
            // onPress={() =>
            //   navigation.dispatch(
            //     CommonActions.navigate({
            //       name: 'TabNavigator',
            //       //params: {
            //       //  user: 'jane',
            //       //},
            //     }),
            //   )
            // }
          >
            登录
          </Button>
          <Button style={styles.btn} {...props} onPress={this._register}>
            注册
          </Button>
        </View>
      </ImageBackground>
    )
  }
  static propTypes = {
    users: PropTypes.array,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    // height: 50,
    width: 200,
    opacity: 0.6,
  },
  btnBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    backgroundColor: '#54719C',
    width: 80,
    height: 30,
    color: 'red',
    borderRadius: 10,
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
