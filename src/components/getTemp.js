import axios from "axios";

export async function getTemp(latitude, longitude, time) {
    var link = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    const res = await axios.get(link);
    return res.data
}


