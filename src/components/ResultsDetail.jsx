import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.Image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars,{result.review_count}</Text>
        </View>
    )
}

export default ResultsDetail

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
    },
    Image:{
        width:250,
        height:150,
        borderRadius: 4,
        marginBottom: 5,
    },
    name:{
        fontWeight:'bold',
        fontSize: 16,
        },
});