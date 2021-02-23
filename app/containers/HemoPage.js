import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import storage from '../utils/storage';
import AsyncStorage from '@react-native-community/async-storage';

// import Button from '../components/Button';

const mapStateToProps = (state) => ({
  users: _.get(state, 'userList.userList', []),
});

const mapDispatchToProps = (dispatch) => ({
  GET_UserList: (payload, callback, loading) =>
    dispatch({type: 'userList/GET_UserList', payload, callback, loading}),
});

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }

  componentDidUpdate() {
    storage.remove('userToken');
    const {users} = this.props;
    //console.log(users);
  }

  async componentDidMount() {
    this.getStorage();
    // console.log(this.props.navigation.getParam('scannerResult'));
  }

  async getStorage() {
    let id = await AsyncStorage.getItem('id');
    this.setState({
      id: JSON.parse(id),
    });
  }

  render() {
    const {GET_UserList, navigation} = this.props;
    // console.log(this.props.navigation);
    const back = () => {
      console.log(this.props.navigation);
      //   this.props.navigation.navigate('登录');
      //   this.props.navigation.push('登录');
      storage.remove('userToken');
    };

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              {/* <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </View> */}
              <Button
                title="跳转"
                onPress={function () {
                  //   GET_UserList();
                  back();
                }}>
                TouchableOpacity Button
              </Button>
            </View>
            {/* <Text>ID：{this.state.id}</Text> */}
            <Text>ALL:{JSON.stringify(navigation.state.params)}</Text>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
  static propTypes = {
    users: PropTypes.array,
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DemoPage);
