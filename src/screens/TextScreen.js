import React, { useState } from "react";
import {View, Text, TextInput} from 'react-native';

const TextScreen = () => {
    const[name, setName] = useState('');

    return(
        <View>
            <Text>Enter your name:
            </Text>
            <TextInput
                style = {{padding: 5, margin: 10, borderColor: 'black', borderWidth: 3}}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue) }
            />
            <Text>My name is {name}</Text>
        </View>
    )
}

export default TextScreen;