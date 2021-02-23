import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import {XItem, Touchable} from '../../components';

const mapStateToProps = (state) => ({
  users: _.get(state, 'userList.userList', []),
});

const mapDispatchToProps = (dispatch) => ({
  GET_UserList: (payload, callback, loading) =>
    dispatch({type: 'userList/GET_UserList', payload, callback, loading}),
});

class IndexPage extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '版本信息',
    };
  };
  constructor(props) {
    super(props);
  }

  //   static navigationOptions = {
  //     title: '注册',
  //   };

  _modifyPwd = () => {
    this.props.navigation.push('ModifyPwdScreen');
  };

  _logout = () => {
    // console.log(this.props.navigation);
    this.props.navigation.push('登录');
  };

  render() {
    return (
      //   <View style={styles.normal}>
      //     <Text h1 style={styles.title}>
      //       Yay! Welcome to dva!
      //     </Text>
      //     <Button title="修改密码" onPress={this._modifyPwd} />
      //   </View>
      <ScrollView style={styles.container}>
        <Touchable
          onPress={() =>
            this.props.navigation.navigate({routeName: 'UserInfoScreen'})
          }>
          <View style={styles.header}>
            <Image
              source={require('../../assets/images/mine/mine_header.png')}
            />
            <View style={styles.titleView}>
              <Text style={styles.title}>{/* {user.name || ''} */}啊哦</Text>
              <Text style={styles.subTitle}>呵呵</Text>
            </View>
            <Image source={require('../../assets/images/icon_arrow.png')} />
          </View>
        </Touchable>
        <View style={styles.buttonView}>
          <XItem
            image={require('../../assets/images/mine/mine_pwd.png')}
            title="修改密码"
            onPress={() => {
              this.props.navigation.navigate({routeName: 'ModifyPwdScreen'});
            }}
          />
          <XItem
            image={require('../../assets/images/mine/mine_version.png')}
            title="版本信息"
            onPress={() => {
              this.props.navigation.navigate({routeName: 'VersionScreen'});
            }}
          />
          <XItem
            image={require('../../assets/images/mine/mine_share.png')}
            title="分享"
            onPress={() => {
              this.props.navigation.navigate({routeName: 'ShareScreen'});
            }}
          />
          <XItem
            image={require('../../assets/images/mine/mine_feedback.png')}
            title="意见反馈"
            hideSeparator
            onPress={() => {
              this.props.navigation.navigate({routeName: 'FeedbackScreen'});
            }}
          />
        </View>
        <Touchable onPress={this._logout}>
          <View style={styles.logoutView}>
            <Text style={styles.logoutText}>退出登录</Text>
          </View>
        </Touchable>
      </ScrollView>
    );
  }
  //   static propTypes = {
  //     users: PropTypes.array,
  //   };
}

const styles = StyleSheet.create({
  normal: {
    fontFamily: 'Georgia, sans-serif',
    marginTop: '0.1%',
    alignItems: 'center',
    height: 2000,
  },
  title1: {
    fontSize: 25,
    fontWeight: 'normal',
    letterSpacing: -1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  titleView: {
    flex: 1,
    padding: 15,
  },
  title: {
    color: '#333',
    fontSize: 18,
  },
  subTitle: {
    marginTop: 10,
    color: '#333',
    fontSize: 12,
  },
  buttonView: {
    marginTop: 10,
  },
  logoutView: {
    marginTop: 20,
    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#FF9800',
    fontSize: 15,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
