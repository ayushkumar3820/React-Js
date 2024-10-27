import React, { useEffect, useState } from 'react';
import './CountryDetail.css';
import { useParams, useNavigate } from 'react-router-dom';

export default function CountryDetail() {
    const params = useParams();
    const countryName = params.country; 

    const [countryData, setCountryData] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then((res) => {
               return res.json();
            })
            .then(([data]) => {
                setCountryData({
                    name: data.name.common,
                    nativeName: Object.values(data.name.nativeName)[0].common,
                    population: data.population,
                    region: data.region,
                    subregion: data.subregion,
                    capital: data.capital,
                    flag: data.flags.svg,
                    tld: data.tld.join(', '), 
                    languages: Object.values(data.languages).join(', '),
                    currencies: Object.values(data.currencies).map((currency) => currency.name).join(', '),
                });
            })
            .catch(() => {
                setNotFound(true); 
            });
    }, [countryName]);
    if (notFound) {
        return <div>Country Not Found</div>; 
    }

    return countryData === null ? (
        'Loading....' 
    ) : (
        <main>
            <div className="country-details-container">
                <span className="back-button" onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>&nbsp;Back
                </span>
                <div className="country-details">
                    <img src={countryData.flag} alt={`${countryData.name} flag`} />
                    <div className="details-text-container">
                        <h1>{countryData.name}</h1>
                        <div className="details-text">
                            <p><b>Native Name: {countryData.nativeName}</b></p>
                            <p><b>Population: {countryData.population.toLocaleString('en-IN')}</b></p>
                            <p><b>Region: {countryData.region}</b></p>
                            <p><b>Subregion: {countryData.subregion}</b></p>
                            <p><b>Capital: {countryData.capital}</b></p>
                            <p><b>Top Level Domain: {countryData.tld}</b></p>
                            <p><b>Currencies: {countryData.currencies}</b></p>
                            <p><b>Languages: {countryData.languages}</b></p>
                        </div>
                        <div className="border-countries">
                            <b>Border Countries: </b>&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
