import React from 'react';
import {Svg,Rect,Line} from 'react-native-svg';

export function LadderIcon(props){
    return (
        <Svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <Rect fill="none" height="256" width="256"/>
            <Line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="64" x2="64" y1="32" y2="224"/>
            <Line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="192" x2="192" y1="32" y2="224"/>
            <Line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="64" x2="192" y1="72" y2="72"/>
            <Line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="64" x2="192" y1="128" y2="128"/>
            <Line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="64" x2="192" y1="184" y2="184"/>
        </Svg>
        );
}