const axios = require('axios');
const colors = require('colors');

const getLugarLatLng = async(dir) => {

    console.log("Buscando clima de ".yellow + dir);
    const encodedURL = encodeURI(dir);
    //console.log("Buscando clima de ".yellow + encodedURL);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'f5dec72374mshf77220f4e7c0e66p1615f9jsn77e84b9ab67d' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`.red);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon


    return {
        direccion,
        lat,
        lng
    }

}
module.exports = {
    getLugarLatLng
}