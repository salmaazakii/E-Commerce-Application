import React from "react";
import {Text} from 'react-native';
import { formatTimer } from "../../Utils/Functions";

export default class Timer extends React.Component{

    constructor(props){
        super(props);
        this.state = {seconds : this.props.countDown? this.props.maxSeconds : 0}
    }
    componentDidMount(){
        this.interval =  setInterval(() => {
            this.setState(prevState => ({seconds : this.props.countDown
                ? prevState.seconds - 1
                : prevState.seconds + 1
            }))
        },1000);
    }
    componentDidUpdate(prevProps,prevState){
        const stopTime = this.props.countDown ? 0 : this.props.maxSeconds
        if(this.state.seconds === stopTime){
            clearInterval(this.interval);
            this.props.onStopFunction();
        }
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
            <Text>{formatTimer(this.state.seconds)}</Text>
        )
    }
}

// export default function Timer(props){

//     const [seconds,setSeconds] = React.useState(props.countDown? props.maxSeconds : 0);
//     var interval;
//     React.useEffect(()=>{
//         const stopTime = props.countDown ? 0 : props.maxSeconds
//         if (seconds === stopTime){
//             props.onStopFunction();
//         } else {
//             interval = setTimeout(() => {
//                 setSeconds(props.countDown ? seconds - 1 : seconds + 1);
//             },1000);
//         }
//         return () => clearInterval(interval);
//     },[seconds]);

//     return(
//         <Text>{formatTimer(seconds)}</Text>
//     );
// }