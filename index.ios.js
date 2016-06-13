import { AppRegistry } from 'react-native';
import GymApp from './app';

import React,{ Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';

class GymAppRoute extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'GymApp',
          component: GymApp,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('GymApp', () => GymAppRoute);
