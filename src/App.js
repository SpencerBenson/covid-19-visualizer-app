import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/covid-logo.png';

class App extends Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
        // console.log(data);
    }

    handleCountrySelection = async (country) => {
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        this.setState({ data: fetchedData, country: country })
    }


    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='covid-19' />
                <Typography>
                    <h1>Daily Updates</h1>
                </Typography>
                <Cards data={data} />
                <CountryPicker handleCountrySelection={this.handleCountrySelection} />
                <Chart data={data} country={country} />
            </div>
        );
    }

}
export default App;