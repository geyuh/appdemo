import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  FlatList,
  SectionList,
} from 'react-native';
import yay from '../assets/yay.jpg';

const styles = StyleSheet.create({
  normal: {
    fontFamily: 'Georgia, sans-serif',
    marginTop: '0.1%', //'3em'
    alignItems: 'center',
    height: 2000,
  },
  title: {
    fontSize: 25, //'2.5rem'
    fontWeight: 'normal',
    letterSpacing: -1, //'-1px'
  },
  welcome: {
    height: 328, //'328px'
    width: 388, //'388px'
  },
  list: {
    fontSize: 12, //'1.2em'
    marginTop: '0.1%', //'1.8em'
    lineHeight: 15, //'1.5em'
  },
  code: {
    backgroundColor: '#f7f7f7',
  },
});

const mapStateToProps = (state) => ({
  users: _.get(state, 'userList.userList', []),
});

const mapDispatchToProps = (dispatch) => ({
  GET_UserList: (payload, callback, loading) =>
    dispatch({type: 'userList/GET_UserList', payload, callback, loading}),
});

class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(name);
    return (
      <View style={styles.normal}>
        <Text h1 style={styles.title}>
          Yay! Welcome to dva!
        </Text>
      </View>
    );
  }
  static propTypes = {
    users: PropTypes.array,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
