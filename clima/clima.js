const axios = require('axios');
const colors = require('colors');

const getClima = async(lat, lng) => {

    const key = '1aa8b3eecac1013204d20c27fb924852';
    console.log(`Lat: ${lat} - Lng: ${lng}`.blue);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`)

    if (resp.data.cod = "200")
        return resp.data.main.temp;
    else
        return "ERROR";

}
module.exports = {
    getClima
}