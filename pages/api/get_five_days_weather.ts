import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import { IWeather } from '../../assets/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const API_KEY = process.env.API_KEY;
        const { lat, lon, city } = req.body;
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`)
        const result: Array<IWeather> = [];

        for (let i = 1; i < 6; ++i) {
            let day = data.data.daily[i];
            result.push({
                dt: day.dt * 1000,
                humidity: day.humidity,
                pressure: day.pressure,
                windDeg: day.wind_deg,
                windGust: day.wind_gust,
                windSpeed: day.wind_speed,
                temp: day.temp.day,
                temp_max: day.temp.max,
                temp_min: day.temp.min,
                feels_like: day.feels_like.day,
                name: city,
                visibility: 0,
                weather: [
                    {
                        description: day.weather[0].description,
                        id: day.weather[0].id,
                        main: day.weather[0].main
                    }
                ]
            })
        }

        res.status(200).json({
            data: result
        })
    } catch (e: any) {
        res.status(400).json({
            error: e
        })
    }
}