import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight ,
  ListView,
  ScrollView,
} from 'react-native';
import { Container, Button, Text, ListItem ,Left, Right } from 'native-base';

export default class TableOrderList extends Component{

  static navigationOptions = ({ navigation }) => ({
    title: `Mesa numero ${navigation.state.params.table.id}`,
  });

  foodAdd = (food: any, id: id) => {
      this.props.navigation.state.params.addFood(food, id);
      this.forceUpdate();
  };

  foodDelete = (food: any, id: id) => {
        this.props.navigation.state.params.deleteFood(food, id);
        this.forceUpdate();
  };

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let dataSource = ds.cloneWithRows(params.table.order);

    let list = (food) => {
        return(
          <ListItem icon>
            <Left>
            <Text>
            Cantidad: {food.cantFood}; de {food.description}
            </Text>
            </Left>
            <Right>
            <TouchableHighlight onPress={() =>{ this.foodDelete(food, params.table.id)}}>
              <Text style={{color:'red'}}>
                X
              </Text>
            </TouchableHighlight>
            </Right>
          </ListItem>
        )
    };

    return (

      <Container>
          <ListView
            enableEmptySections={true}
            dataSource={dataSource}
            renderRow={list}
          />
          <Button full onPress={() => navigate('AgregarOrden', {table: params.table, addFood: this.foodAdd})}>
            <Text>Agregar </Text>
          </Button>
      </Container>
    );
  }
}
