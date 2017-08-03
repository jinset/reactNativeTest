import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import { Container, Content,Form, Item, Input, Label, Button, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon} from 'native-base';

const cards = [
  {
    text: 'ListTables',
    name: 'Mesero',
    image: require('../components/imgs/salon.jpg'),
  },
  {
    text: 'PendingOrders',
    name: 'Cocinero',
    image: require('../components/imgs/cocina.jpg'),
  },
];

export default class Rooms extends Component{

  static navigationOptions = ({ navigation }) => ({
    title: 'Seleccion',
  });

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;

    return (
      <Container>
             <View>
              <DeckSwiper
           dataSource={cards}
           renderItem={item =>
             <Card style={{ elevation: 3 }}>
               <CardItem>
                 <Left>
                   <Thumbnail source={item.image} />
                   <Body>
                     <Text>{item.text}</Text>
                     <Text note></Text>
                   </Body>
                 </Left>
               </CardItem>
               <CardItem cardBody>
                 <Image style={{ height: 300, flex: 1 }} source={item.image} />
               </CardItem>
               <CardItem  >
               <Button block info onPress={() => navigate(item.text, {cantTable: params.cantTable, addFood: params.addFood, deleteFood: params.deleteFood})}   style={{marginTop:15}}>
                  <Text>Seleccionar {item.name}</Text>
               </Button>
               </CardItem>
             </Card>
           }
         />
             </View>
           </Container>
    );
  }
}
