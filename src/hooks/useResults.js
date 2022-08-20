import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () =>{
    const [results, setResults]= useState([]);
    const [errMessage, setErrMessage]= useState('');

    // FUNCTION MAKING CALL TO API
    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search',{
            params: {
                limit: 50,
                term: searchTerm,
                location: 'honolulu'
            }
        });
        setResults(response.data.businesses);
        } catch(err){
            setErrMessage('Something went wrong!..')
        }
    };

    useEffect(()=> {
        searchApi('pasta');
    }, []);
    return[searchApi, results, errMessage];
};