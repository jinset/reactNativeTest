'use strict';
import {
  AppRegistry,
  Alert,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';

const ExamenProyecto = StackNavigator({
  Home: { screen: Home },

});
AppRegistry.registerComponent('ExamenProyecto', () => ExamenProyecto);
