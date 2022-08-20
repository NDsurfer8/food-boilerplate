import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import useResults from '../hooks/useResults'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'


const SearchScreen = () => {
    // STATE MANAGED BY SEARCH SCREEN....PASS DOWN TERM AND ONTERMCHANGE FUNCTION DOWN TO SEARCHBAR.
    // console.log(props)
    const [term, setTerm] = useState('');
    const [searchApi, results, errMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === $, $$, $$$
        return results.filter(result => {
            return result.price === price;
        })
    }


    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />

            {
                errMessage ? <Text>{errMessage}</Text> : null
            }
            
            <ScrollView>
                <ResultsList  
                    title='Cost Effective' 
                    results={filterResultsByPrice('$')}
                    
                />
                <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')}  />
                <ResultsList title='Big Spender' results={filterResultsByPrice('$$$')}  />
            </ScrollView>
        </>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})