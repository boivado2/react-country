/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CountryDetails extends Component {
    componentDidMount() {
        this.props.getCountry(this.props.match.params.name);
    }

    render() {
        const {
            name,
            population,
            region,
            capital,
            subregion,
            flag,
            callingCodes,
            timezones,
            topLevelDomain,
            nativeName,
            borders,
            languages
        } = this.props.country;

        return (
            <div className="container">
                <div
                    style={{
                        margin: '2rem 0 ',
                        padding: '0',
                        textAlign: 'start'
                    }}
                    className="link"
                >
                    <Link className="btn btn-dark" to="/">
                        <i className="fas fa-arrow-left"></i>Back
                    </Link>
                </div>
                <div className="grid-2">
                    <img
                        src={flag}
                        className="card-img-top"
                        style={{ width: '100%', height: '100%' }}
                        alt=""
                    />
                    <div className="text-sec lead">
                        <h1>{name}</h1>
                        <div className="text-content grid-2">
                            <div className="text-1">
                                <p>Native Name: {nativeName}</p>
                                <p>Population: {population}</p>
                                <p>Region: {region}</p>
                                <p>Sub Region: {subregion}</p>
                                <p>Capital: {capital}</p>
                            </div>
                            <div className="text-2">
                                <p>TopLevelDomain : {topLevelDomain}</p>
                                <p>CaliingCodes :{callingCodes}</p>
                                <p>TimeZone : {timezones}</p>
                            </div>
                        </div>
                        <p>Borders Countries:{borders}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountryDetails;
