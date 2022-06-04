import React,{useEffect} from 'react';
import {View,TextInput,StyleSheet,Text,Dimensions} from 'react-native';
// import { rem } from '../src/Utils/Constants';
import {scale} from 'react-native-size-matters';

const {width,height} = Dimensions.get('window');

function Input (props){
    const styles = StyleSheet.create({
        BasicInput : {
            backgroundColor : 'white'
            , color : 'grey'
            , borderRadius : 5
            , borderColor :'#e8e9eb'
            , borderWidth : 1
            , marginBottom : 20
            , padding : 10
            , height : scale(40)
            , fontSize : scale(14)
        }
    });
    return (
        <TextInput
                style={styles.BasicInput}
                placeholder={props.placeholder}
        />
    );
}
export default function BasicForm (props){

    const [realTimeWidth,setWidth] = React.useState(width);

    useEffect(()=>{
        Dimensions.addEventListener('change',({window}) =>{
            setWidth(window.width);
        });

    return ()=>{
        try{
            Dimensions.remove('change');
        } catch (err){
            console.error('Can not remove event listener for the event "change".' & JSON.stringify(err));
        }
    };

    },[]);

    const blnWideScreen = (realTimeWidth > 400)
    console.log(`Window Width: ${realTimeWidth}, height: ${height}`);

    return(
        <View style={{flex:1,justifyContent:'center',paddingHorizontal:50}}>
            <Input placeholder="Enter your email"/>
            <View style={ blnWideScreen ? {flexDirection : 'row'} : null}>
                <View style={ blnWideScreen ? {flex : 1,marginRight:5} : null}>
                    <Input placeholder="Enter your password"/>
                </View>
                <View style={ blnWideScreen ? {flex : 1,marginLeft:5} : null}>
                    <Input placeholder="Confirm password"/>
                </View>
            </View>
            <Text style={{color:'black',fontSize: scale(28),fontWeight : 'bold'}}>Sign Up</Text>
        </View>
    );
}