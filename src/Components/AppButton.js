import React from "react";
import {Text, ActivityIndicator,TouchableOpacity} from 'react-native';
import { Styles } from "../styles";
import { PlatformTouchable } from "./PlatformTouchable";

export class AppButton extends React.Component{
    render(){
        const {title,wrapperStyle,titleStyle,isLoading, ...rest} = this.props;
        return(
            <TouchableOpacity 
                {...rest}
                style={[Styles.AppButton,wrapperStyle]}
                disabled = {isLoading}
            >
                { isLoading 
                ? <ActivityIndicator></ActivityIndicator>
                : <Text style={[Styles.AppButtonText,titleStyle]}>{title}</Text>
                }
            </TouchableOpacity>
            // <PlatformTouchable 
                
            // >
            // </PlatformTouchable>
        );
    }
}