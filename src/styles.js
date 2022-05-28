import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    Center :{
        justifyContent: "center"
        ,alignItems : "center"
        , height: '100%'
    }
    ,AppButton : {
        marginHorizontal : 10
        , backgroundColor : 'black'
        , height : '7%'
        ,width : '80%'
        ,alignItems : 'center'
        ,justifyContent : 'center'
        ,borderRadius : 5
    }
    ,AppButtonText:{
        color : 'white'
        ,fontSize : 18
        ,fontFamily : 'sans-serif'
        ,fontWeight : '700'
    }
});