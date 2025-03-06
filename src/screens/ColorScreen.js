import React, { useReducer } from "react";
import { View, Text, Button} from 'react-native';
import ColorDetail from "../Components/ColorDetail";

const reducer = (state, action) => {

    switch(action.type){
        case 'change_red' :
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state
            : {...state, red : state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : {...state, green : state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : {...state, blue : state.blue + action.payload};
        default:
            return state;
    }
}

const counter = 15;
const ColorScreen = () => {
     const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
     const {red, green, blue} = state;
    return (
        <View>
            <ColorDetail 
            onIncrease = {() => 
                dispatch({type: 'change_red', payload : counter})
            }
            onDecrease = { () => 
                dispatch({type:'change_red', payload: -1 * counter})
            }
            color = "red"
            />
            <ColorDetail 
             onIncrease = { () => 
                dispatch({type: 'change_green', payload : counter})
             }
             onDecrease = { () => 
                dispatch({type: 'change_green', payload : -1 * counter})
             }
            color = "green"
            />
            <ColorDetail 
             onIncrease = { () => 
                dispatch({type: 'change_blue', payload : counter})
             }
             onDecrease = { () => 
                dispatch({type: 'change_blue', payload : -1 * counter})
             }
            color = "blue"
            />
            <View style = {{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}></View>
        </View>
    )
}

export default ColorScreen;