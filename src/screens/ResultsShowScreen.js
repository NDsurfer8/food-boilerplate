import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
const [result, setResult] = useState(null);
const id =navigation.getParam('id');



const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    response.data;
    setResult(response.data)
}
useEffect(()=>{
    getResult(id)
},[])


if(!result){
    return null;
}

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image style={styles.Image} source={{uri: item}}/>
            }}
            />
        </View>
    )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
    Image:{
        width: 300,
        height: 200,
    }
})