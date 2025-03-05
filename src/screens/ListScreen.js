import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';


const ListScreen = () => {
    const Friends = [
        {name: "friend 1", age: '21'},
        {name: "friend 2", age: '23'},
        {name: "friend 5", age: '22'},

        {name: "friend 4", age: '24'}

    ]

    return (
        <FlatList 
            keyExtractor={ (friend) => {friend.age}}
            data={Friends} 
            renderItem={({item}) => {
                return ( 
                    <Text style ={styles.textAlign}>
                    {item.name} - {item.age}
                    </Text>
                );
            } 
        }
        />
    )
};

const styles = StyleSheet.create({
    textAlign : {
        marginVertical: 60
       
    }
});

export default ListScreen;
