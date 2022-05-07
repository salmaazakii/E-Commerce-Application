import React from "react";
import {View,Text} from 'react-native';
import { AppButton } from "../AppButton";
import { styles } from "./styles";

export default function AddToCartButton (props){
    const [quantity,setQuantity] = React.useState(0);
    
    const incrememtHandler = ()=> setQuantity(quantity +1);
    const decrememtHandler = ()=> setQuantity(quantity -1);
    const renderBasicButton = () =>{
        return(
            <AppButton title='ADD TO CART' onPress={incrememtHandler}/>
        )
    }
    const renderQuantityButton = () => {
        return(
            <View style={styles.QuantityButton}>
                <Text style ={styles.symbolStyle} onPress={decrememtHandler}>-</Text>
                <Text>{quantity}</Text>
                <Text style ={styles.symbolStyle} onPress={incrememtHandler}>+</Text>
            </View>
        )
    }
    return (
        quantity === 0 ? renderBasicButton() : renderQuantityButton()
    );
}