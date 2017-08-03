'use strict';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './views/home';
import Rooms from './views/rooms';
import TableList from './views/tableList';
import TableOrderList from './views/tableOrderList';
import AddOrder from './views/addOrder';
import PendingOrders from './views/pendingOrders';

const ExamenProyect = StackNavigator({
  Home: { screen: Home },
  Rooms: { screen: rooms },
  ListTables: { screen: TableList },
  ListaOrden: { screen: TableOrderList },
  AgregarOrden: { screen: AddOrder },
  PendingOrders: { screen: PendingOrders },

});
AppRegistry.registerComponent('ExamenProyect', () => ExamenProyect);
