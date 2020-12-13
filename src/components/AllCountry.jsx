import React, { Component } from 'react';
import Country from './country';

const AllCountry = ({ countries }) => {
    return (
        <div
            className="container all-country"
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: '0.6rem'
            }}
        >
            {countries.map((country) => (
                <Country key={country.alpha2Code} country={country} />
            ))}
        </div>
    );
};

export default AllCountry;
