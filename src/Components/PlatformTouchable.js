import React from 'react';
import {Platform,TouchableOpacity,TouchableNativeFeedback} from 'react-native';

export class PlatformTouchable extends React.Component{
    render(){
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        return <Touchable {...this.props}/>
    }
}