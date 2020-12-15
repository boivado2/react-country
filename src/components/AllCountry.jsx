import React from 'react';
import Country from './country';

const AllCountry = ({ countries }) => {
    return (
        <div className="container grid-3">
            {countries.map((country) => (
                <Country key={country.alpha2Code} country={country} />
            ))}
        </div>
    );
};

export default AllCountry;
