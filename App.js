import React from 'react';
import Greeting from './TestComp/Greeting';
import { View,Text,Button,Alert, Image} from 'react-native';
import { PlatformTouchable } from './src/Components/PlatformTouchable';
import { AppButton } from './src/Components/AppButton';
import { Styles } from './src/styles';
import Counter from './TestComp/Counter';
import AddToCartButton from './src/Components/AddToCart';
import Timer from './src/Components/Timer';
import {HorizontalLayout, ULayout, VerticalLayout} from './TestComp/FlexBox';
import BasicForm from './TestComp/ResponsiveFormLayout';
import { LadderIcon } from './TestComp/LadderIcon';
class App extends React.Component {
  render(){
    return (
      <View style={Styles.Center} >
        {/* <Image source={require('./assets/images/shipping_truck_icon.png')}/> */}
        <LadderIcon />
      </View>
    );
  }
};

export default App;
