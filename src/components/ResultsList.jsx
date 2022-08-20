import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'


const ResultsList = ({title, results, navigation}) => {


if(!results.length){
    return null;
}

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return(
                    <TouchableOpacity 
                        onPress={()=> navigation.navigate('Results',{
                            id: item.id
                        })}
                    >
                    <ResultsDetail result={item}  />
                    </TouchableOpacity>
                    ) 
                }}
            />
        </View>
    )
}

export default withNavigation(ResultsList); 

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom:5,
    },
    container:{
        margin:10
    }
})