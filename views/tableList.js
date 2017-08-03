import React, { Component } from 'react';
import {
  AppRegistry,
  Image
} from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class TableList extends Component{

  static navigationOptions = ({ navigation }) => ({
    title: 'MESAS',
  });


  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    let listTable = params.cantTable.map((table,i) => {
      return(
           <ListItem key={i} onPress={() => navigate('ListaOrden', {table: table, addFood: params.addFood, deleteFood: params.deleteFood})}>
              <Thumbnail square size={80} source={{ uri: '../components/imgs/table.jpg' }} />
                  <Body>
                        <Text>Mesa : {table.id}</Text>
                  </Body>
            </ListItem>

      )
    });
    return (
      <List >
          {listTable}
      </List>
    );
  }
}
