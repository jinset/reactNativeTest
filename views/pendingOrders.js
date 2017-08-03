import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ListView,
} from 'react-native';
import { Button, Container, Content, List, ListItem, Text, Separator ,Left, Body, Right,} from 'native-base';
export default class PendingOrders extends Component{

  static navigationOptions = ({ navigation }) => ({
    title: 'Lista de ordenes pendientes',
  });

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    let list = (food) => {
        return(
          <ListItem>
          <Left>
          <Text>
            Mesa {food.idTable} con {food.cantFood} {food.description}
          </Text>
              </Left>
              <Right>
              <Button rounded success onPress={() =>{ params.deleteFood(food, food.idTable);
                this.forceUpdate();}}>
                  <Text>Listo</Text>
              </Button>
                </Right>

          </ListItem>
        )
    };

    let pendingFoods = (tables) => {
      let foods: any[] = [];
      tables.forEach(table => {
        table.order.forEach(food => {
          food.idTable = table.id;
          foods.push(food);
        });
      });
      return foods;
    };

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let dataSource = ds.cloneWithRows(pendingFoods(params.cantTable));


    return (
      <Container>
             <Content>
          <ListView
            enableEmptySections={true}
            dataSource={dataSource}
            renderRow={list}
          />

           </Content>
               </Container>
    );
  }
}
