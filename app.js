const colors = require('colors');
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    const coord = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coord.lat, coord.lng);

    if (climas != "ERROR")
        return `El clima de ${direccion} es de ${temp}°`.green;
    else
        return `No se pudo determinar el clima de ${direccion}`.bgRed;

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);