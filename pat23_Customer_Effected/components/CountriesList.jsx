
import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import CountriesListShimmer from './CountriesListShimmer';
// import countriesData from '../countriesData.js';

export default function CountryList({ query }) {

  const [countriesData,setCountriesData]= useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
    .then((data)=>{
      setCountriesData(data)
    })
  },[])

  if(!countriesData.length)
  {
   return  <CountriesListShimmer/>
  }
  return (
    <div className="countries-container">
      {countriesData
        .filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        )
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags?.svg}   
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}  
              data={country}
            />
          );
        })}
    </div>
  );
}