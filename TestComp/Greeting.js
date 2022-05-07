import React from 'react';
import { Text } from 'react-native';


export default class Greeting extends React.Component {
  render() {
    const {name} = this.props;
    return <Text>Hello {name? name : 'Mr. No one'}!</Text>;
  }
}

export function GreetingFunction (props){
  return <Text>Hello {props.name? props.name : 'Mr. No one'}!</Text>;
}
