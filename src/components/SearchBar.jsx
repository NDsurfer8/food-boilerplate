import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

import { Feather } from '@expo/vector-icons';
const SearchBar = ({term, onTermChange, onTermSubmit}) => {


    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search"style={styles.iconStyle}/> 
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder='Search'
            value={term}
            onChangeText={ onTermChange }
            onEndEditing={onTermSubmit }
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#f0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle:{
        flex:1,
        fontSize: 18,
    },
    iconStyle:{
        fontSize: 35,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})