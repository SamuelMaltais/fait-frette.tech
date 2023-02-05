import { cities } from "../cities";
import { getTemp } from "./getTemp.js"

export async function findBetterCity(currentCity, tempDelta, windDelta, humidityDelta, time) {
    var citiesInfo = [];

    var currentCityInfo = await getTemp(cities[currentCity][0].lat, cities[currentCity][0].lng, 0)
    var currentTemp = currentCityInfo.current_weather.temperature;
    var currentWind = currentCityInfo.current_weather.windspeed;
    var currentHumidity = currentCityInfo.hourly.relativehumidity_2m[0];

    for (var city in cities) {
        if (cities[city][0].population < 100000){
            continue;
        }

        var lat = cities[city][0].lat;
        var lng = cities[city][0].lng;
        var cityInfo = await getTemp(lat, lng, 0)

        var temp = cityInfo.current_weather.temperature;
        var wind = cityInfo.current_weather.windspeed;
        var humidity = cityInfo.hourly.relativehumidity_2m[0];

        if ((tempDelta === 0 && (temp + 10 >= currentTemp || temp - 10 <= currentTemp)) 
        
            || (tempDelta > 0 && currentTemp < temp)
            
            || (tempDelta < 0 && currentTemp > temp)
        
            )   {

            if ((windDelta == 0 && (wind + 10 >= currentWind || wind - 10 <= currentWind)) 
        
                || (windDelta > 0 && currentWind < wind) 
            
                || (windDelta < 0 && currentWind > wind)
        
                )   {

                if ((humidityDelta == 0 && (humidity + 10 >= currentHumidity || humidity - 10 <= currentHumidity)) 
        
                    || (humidityDelta > 0 && currentHumidity < humidity) 
            
                    || (humidityDelta < 0 && currentHumidity > humidity)
        
                    )   {
                        citiesInfo.push({"name":city, "lat":lat, "lng":lng, "province":cities[city][0].province_id, "temp":temp, "humidity":humidity, "wind":wind})
                }            
            }
        }
    }
    return citiesInfo
}
//findBetterCity("Toronto", 2, -2, -2, 0);