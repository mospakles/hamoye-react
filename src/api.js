const axios = require('axios');

const BASE_URL = 'https://opensky-network.org/api';

async function getFlightsAll() {
    const url = `${BASE_URL}/flights/all`;
    const response = await axios.get(url);
    return response.data;
}

async function getFlightsArrival() {
    const url = `${BASE_URL}/flights/arrival`;
    const response = await axios.get(url);
    return response.data;
}

async function getFlightsDeparture() {
    const url = `${BASE_URL}/flights/departure`;
    const response = await axios.get(url);
    return response.data;
}

async function getFlightsAircraft() {
    const url = `${BASE_URL}/flights/aircraft`;
    const response = await axios.get(url);
    return response.data;
}

module.exports = {
    getFlightsAll,
    getFlightsArrival,
    getFlightsAircraft,
    getFlightsDeparture,
}