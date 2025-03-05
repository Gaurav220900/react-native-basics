import React from "react";
import {View, StyleSheet, Image} from 'react-native';
import ImageDetail from "../Components/ImageDetail";
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title = "forest" imageSource={require('../../assets/download.jpg')} />
            <ImageDetail title = "beach" imageSource={require('../../assets/download.jpg')} />
            <ImageDetail title = "mountain" imageSource={require('../../assets/download.jpg')} />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;