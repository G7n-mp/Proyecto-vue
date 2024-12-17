import axios from "axios"

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-38.7396&longitude=-72.5984&current=temperature_2m&timezone=auto&forecast_days=1'

export const getTemperatura = async () => {
    const respuesta = await axios.get(API_URL);
    const nuevaTemperatura = respuesta.data.current.temperature_2m
    return nuevaTemperatura
};