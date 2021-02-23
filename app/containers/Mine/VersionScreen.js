import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import {XItem} from '../../components';

class VersionScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '版本信息',
    };
  };

  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.viewImg}>
            <Image
              //   source={require('../../assetsrr/images/mine/version_logo.png')}
              source={require('../../assets/yay.jpg')}
              style={styles.img}
            />
          </View>
          <View>
            <XItem height={50} title="当前版本" subTitle={''} hideChevron />
            <XItem
              height={50}
              title="版本更新"
              subTitle="检查更新"
              subTitleStyle={{color: '#1585ed'}}
              hideChevron
              hideSeparator
              onPress={() => {}}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  viewImg: {
    marginVertical: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
});

export default VersionScreen;
