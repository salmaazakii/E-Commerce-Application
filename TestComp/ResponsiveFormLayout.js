import React,{useEffect} from 'react';
import {View,TextInput,StyleSheet,Text,Dimensions} from 'react-native';

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
            Dimensions.removeEventListener('change');
        } catch (err){
            console.error(JSON.stringify(err));
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
            <Text style={{color:'black'}}>Sign Up</Text>
        </View>
    );
}