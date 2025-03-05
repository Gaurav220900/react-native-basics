import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = props => {
  
  return (
    <View>
      <Text style={styles.text}>Getting stated with React Native</Text>
      <Button 
      onPress={ () => {props.navigation.navigate('ComponentScreen')}}
      title="Go to Component Screen"
      />

      <TouchableOpacity>
        <Text onPress={ () => {props.navigation.navigate('ListScreen')}}>Go to List Screen</Text>
      </TouchableOpacity>

      <Button 
      onPress={ () => {props.navigation.navigate('ImageScreen')}}
      title="Go to Image Screen"
      />

  <Button 
      onPress={ () => {props.navigation.navigate('CounterScreen')}}
      title="Go to Counter Screen"
      />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  subHeading: {
    fontSize: 20,
  }
});

export default HomeScreen;
