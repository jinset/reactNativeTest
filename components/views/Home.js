'use strict';
import {
  AppRegistry,
  Text,

} from 'react-native';

import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content,Form, Item, Input, Label, Button} from 'native-base';


export default class Home extends Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = {
    title: 'Registrar una cuenta',
  };


  render() {

    return (
      <Container>
             <Content>
             <Form>
              <Text>sdsd</Text>
             </Content>
           </Container>

    );
  }
}

module.export = Home;
