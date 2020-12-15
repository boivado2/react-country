import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country: { name, capital, flag, region, population } }) => {
    return (
        <div className="card lead" style={{ width: '19rem' }}>
            <img src={flag} alt="" className="card-img-top" />
            <div>
                <h5 className="text-left">Name: {name}</h5>
                <p className="card-text text-left">Population: {population}</p>
                <p className="card-text  text-left">Region: {region}</p>
                <p className="card-text  text-left">Capital: {capital}</p>
                <Link
                    style={{
                        textDecoration: 'none',
                        display: 'block',
                        width: '100%',
                        marginTop: '1rem'
                    }}
                    className="btn btn-dark"
                    to={`country/${name}`}
                >
                    More Details <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
};

export default Country;
