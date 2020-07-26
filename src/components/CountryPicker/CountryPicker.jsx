import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountrySelection})=> {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=> {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries]);

console.log(fetchedCountries);



    return(
       <FormControl className={styles.formControl}>
           <NativeSelect defaultValue="" onChange= {(e) => {handleCountrySelection(e.target.value)}}>
           <option value='' key={0}>Global</option>

           {fetchedCountries.map((country,i) => <option value={country} key={i}>{country}</option>)}
               
           </NativeSelect>
       </FormControl>
    );
}

export default CountryPicker;