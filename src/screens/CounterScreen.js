import React, {use, useState} from 'react';
import {View, Text, Button} from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
        <Button title='Increase Counter' onPress={ () => {
            setCounter(counter + 1);
        }} />
        <Button title='Decrease Counter' onPress={ () => {
            setCounter(counter - 1);
        }} />

        <Text>Current Counter: {counter} </Text>
        </View>
    )
};

export default CounterScreen;