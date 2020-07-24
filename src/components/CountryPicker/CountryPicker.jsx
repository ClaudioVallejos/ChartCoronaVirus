import React, {useEffect, useState} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

//importando los datos obtenidos de la api
import {countryData} from '../../api'

import styles from './CountryPicker.module.css'


const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFechedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () =>{
            setFechedCountries(await countryData());
        }
        fetchAPI();
    }, [setFechedCountries])
    
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) =>
                    <option key={i} value={country}> {country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker