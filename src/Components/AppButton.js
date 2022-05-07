import React from "react";
import {Text, ActivityIndicator} from 'react-native';
import { Styles } from "../styles";
import { PlatformTouchable } from "./PlatformTouchable";

export class AppButton extends React.Component{
    render(){
        const {title,wrapperStyle,titleStyle,isLoading, ...rest} = this.props;
        return(
            <PlatformTouchable 
                {...rest}
                style={wrapperStyle}
                disabled = {isLoading}
            >
                { isLoading 
                ? <ActivityIndicator></ActivityIndicator>
                : <Text style={titleStyle}>{title}</Text>
                }
            </PlatformTouchable>
        );
    }
}