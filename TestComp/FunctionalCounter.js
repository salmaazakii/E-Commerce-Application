import React from 'react';
import {View,Text,Button} from 'react-native';

export default function Counter(props){
    const [counter,setCounter] = React.useState(0);

    React.useEffect(()=>{
        console.log("useEffect callback function")
        return () => {
            console.log("unMounting Counter");
        }
    },[counter]);

    const incrememtHandler = () => {
        setCounter(counter +1);
    }
    const decrememtHandler = ()=>{
        setCounter(counter -1);
    }
    return(
        <View style={{alignItems:'center'}}>
            <Button title="Increment" onPress={incrememtHandler}></Button>

            <Text>{counter}</Text>

            <Button title="decrement" onPress={decrememtHandler}></Button>
        </View>
    );
}