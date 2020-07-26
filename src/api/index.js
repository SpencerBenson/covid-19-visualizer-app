import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableURL = url;
    if(country){
        changeableURL = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifiedData;



    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {


    try {
        const {data} = await axios.get(`${url}/daily`);
        // console.log(data);
        const fetchedDailyData = data.map((dailyData) => ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return fetchedDailyData;
    }
    catch (error) {
        return {
            msg: error.message,
            error: true
        }
    }
}

export const fetchCountries = async () => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
      
        return countries.map((country) => country.name )
    }
    catch (error) {
        return {
            msg: error.message,
            error: true
        }
    }
}