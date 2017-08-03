import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight ,
  TextInput,
} from 'react-native';
import { Text, Button,Container, Content, Item, Input,Grid, Col} from 'native-base';

import ModalDropdown from 'react-native-modal-dropdown';

let cantFood = 1;
export default class AddOrder extends Component{

  static navigationOptions = ({ navigation }) => ({
    title: `Mesa # ${navigation.state.params.table.id}`,
  });

  constructor(props){
    super(props);
    this.state = {
      typeFood: null,
      description: null,
      cantFood: 1,
    };
  }

  minus=()=>{
    if(this.state.cantFood === 1){

    }else{
      cantFood = cantFood -1;
      this.setState({
        cantFood: cantFood
      });
    }
  }

  plus=()=>{
    cantFood = cantFood +1;
    this.setState({
      cantFood: cantFood
    });
  }

  add=()=>{
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;
    params.addFood(this.state, params.table.id);
    goBack(null);
  }

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Content>

        <ModalDropdown
        style={{alignItems: 'center',
        alignContent :'center'}}
          textStyle={{fontSize:25}}
          dropdownStyle={{width:Dimensions.get('window').width, height:Dimensions.get('window').height}}
          dropdownTextStyle={{fontSize:25}}
          defaultValue={'Seleccion tipo alimento'}
          options={['Entrada','Plato principal','Bebida','Postre']}
          onSelect={(index,typeFood) => this.setState({typeFood: typeFood})}
        />
        <Item rounded style={{marginTop:15}}>
        <Input
          style={{fontSize:20}}
          maxLength={80}
          numberOfLines={3}
          placeholder={'Descripcion, maximo 80 caracteres'}
          onChangeText={(text) => this.setState({description: text})}
        />
        </Item>
        <Grid style={{marginTop:15}}>
          <Col><Button rounded onPress={this.minus.bind(this)}>
           <Text>-</Text>
           </Button></Col>
          <Col><Text style={{fontSize:30}}>{this.state.cantFood}</Text></Col>

          <Col><Button rounded onPress={this.plus.bind(this)}>
           <Text>+</Text>
          </Button></Col>
          </Grid>

          <Button block info onPress={this.add.bind(this)} style={{marginTop:15}}>
             <Text style={{color:'white'}}>Agregar</Text>
          </Button>

      </Content>
    </Container>
    );
  }
}
