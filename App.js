import React from 'react';
import Greeting from './TestComp/Greeting';
import { View,Text,Button,Alert } from 'react-native';
import { PlatformTouchable } from './src/Components/PlatformTouchable';
import { AppButton } from './src/Components/AppButton';
import { Styles } from './src/styles';
import Counter from './TestComp/Counter';
import AddToCartButton from './src/Components/AddToCart';
import Timer from './src/Components/Timer';
import {HorizontalLayout, ULayout, VerticalLayout} from './TestComp/FlexBox';
class App extends React.Component {
  render(){
    return (
      <View style={Styles.Center} >
        {/* <AppButton 
          title='Done'
          isLoading={false}
          onPress={()=> Alert.alert('Hi')}>
        </AppButton> */}
        {/* <Counter /> */}
        <AddToCartButton />
        {/* <Timer maxSeconds = {100} countDown={true} onStopFunction={()=> Alert.alert("Time out!")}/> */}
        {/* <ULayout /> */}
      </View>
    );
  }
};

export default App;
