import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { Container, Content,Form, Item, Input, Label, Button, Grid, Col, Row} from 'native-base';


let cantTable = [{id: 1, order:[]}];
export default class Home extends Component{

  static navigationOptions = {
    title: 'Mesas',
  };

  constructor(props){
    super(props);
    this.state = {
      cantTable: cantTable
    };
  }

  minus=()=>{
    if(this.state.cantTable.length === 1){

    }else{
      let cantTables = this.state.cantTable;
      cantTable.pop({id: cantTable.length + 1, order: []});
      this.setState({
        cantTable: cantTables
      });
    }
  }

  plus=()=>{
    let cantTables = this.state.cantTable;
    cantTable.push({id: cantTable.length + 1, order: []});
    this.setState({
      cantTable: cantTables
    });
  }

  addFood = (food: any, id: id) => {
       let cantTables = this.state.cantTable;
       let idTable = cantTables.findIndex(cantTable => cantTable.id === id);
       cantTables[idTable].order.push(food);
       this.setState({cantTable: cantTables});
  };

  deleteFood = (food: any, id: id) => {
        let cantTables = this.state.cantTable;
        let idTable = cantTables.findIndex(cantTable => cantTable.id === id);
        let idOrder = cantTables[idTable].order.findIndex(tableOrder => tableOrder.descripcion === food.descripcion);
        cantTables[idTable].order.splice(idOrder, 1);
        cantTables[idTable] = cantTables[idTable];
        this.setState({cantTables: cantTables});
  };

  render() {
    const { navigate } = this.props.navigation;

    return(
      <Container>
     <Content padder>
       <Grid>
         <Col><Button rounded onPress={this.minus.bind(this)}>
          <Text>-</Text>
          </Button></Col>
         <Col><Text style={{fontSize:30}}>{this.state.cantTable.length}</Text></Col>

         <Col><Button rounded onPress={this.plus.bind(this)}>
          <Text>+</Text>
         </Button></Col>
         </Grid>
      <Button block info  onPress={() => navigate('Rooms', {cantTable: this.state.cantTable, addFood: this.addFood, deleteFood: this.deleteFood})}   style={{marginTop:15}}>
         <Text style={{color:'white'}}>Empezar</Text>
      </Button>

        </Content>
      </Container>
    );
  }
}
