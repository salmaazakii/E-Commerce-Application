import React from 'react';
import {View} from 'react-native';

function Box(props){
    return(
        <View style={{
            width : '40%'
            ,height : 50
            ,backgroundColor : props.color
            ,borderWidth: 1
            ,borderRadius: 5
            ,borderColor : props.color
        }}/>
    );
}
function Layout(props){
    return(
        <View style={props.myStyle}>
            <Box color ="blue" />
            <Box color ="green" />
            <Box color ="yellow" />
            <Box color ="red" />
            <Box color ="orange" />
        </View>
    );
 }
export function HorizontalLayout (props){
    return(
        <Layout myStyle = {{flexDirection: 'row',justifyContent : 'space-around',alignItems : 'center'}}/>
    );
}
export function VerticalLayout(props){
    return(
        <Layout myStyle = {{justifyContent : 'space-around',alignItems : 'center',height: '100%'}}/>
    );
}
export function ULayout(props){
    return(
        <Layout myStyle = {{flexDirection : 'row',flexWrap : 'wrap',justifyContent:'space-around',alignContent:'space-around',height:'100%'}}/>
    );
}