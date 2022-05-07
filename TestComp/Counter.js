import React from 'react';
import {View,Text,Button} from 'react-native';

export default class Counter extends React.Component{
    state = {counter : 0};

    incrememtHandler = ()=>{
        this.setState(prevState => ({counter : prevState.counter +1}));
    }
    decrememtHandler = ()=>{
        this.setState(prevState => ({counter : prevState.counter -1}));
    }

    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Button title="Increment" onPress={this.incrememtHandler}></Button>

                <Text>{this.state.counter}</Text>

                <Button title="decrement" onPress={this.decrememtHandler}></Button>
            </View>
        );
    }
}