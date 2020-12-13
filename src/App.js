/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Select from './components/Select';
import AllCountry from './components/AllCountry';
import CountryDetails from './components/CountryDetails';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
    state = {
        countries: [],
        country: {},
        loading: false,
        text: ''
    };

    async componentDidMount() {
        this.setState({ loading: true });

        const response = await axios.get(
            `https://restcountries.eu/rest/v2/all`
        );

        const responseData = await response.data;

        this.setState({ countries: responseData, loading: false });
    }

    onSearch = async (country) => {
        const response = await axios.get(
            `https://restcountries.eu/rest/v2/name/${country}`
        );
        const responseData = await response.data;

        this.setState({ countries: responseData });
    };

    getCountry = async (country) => {
        const response = await axios.get(
            `https://restcountries.eu/rest/v2/name/${country}`
        );
        const responseData = await response.data;

        this.setState({ country: responseData[0] });
    };

    handleSelect = async (value) => {
        console.log(value);
        const response = await axios.get(
            `https://restcountries.eu/rest/v2/region/${value}`
        );
        const responseData = await response.data;

        this.setState({ countries: responseData });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => (
                                <React.Fragment>
                                    <Search
                                        onSearch={this.onSearch}
                                        onSelect={this.handleSelect}
                                    />

                                    <AllCountry
                                        countries={this.state.countries}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route exact path="/about" component={About} />
                        <Route
                            exact
                            path="/country/:name"
                            render={(props) => (
                                <CountryDetails
                                    {...props}
                                    country={this.state.country}
                                    getCountry={this.getCountry}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
