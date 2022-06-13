import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { IWeather } from '../../assets/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const API_KEY = process.env.API_KEY;
        const { lat, lon } = req.body;
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
        let result: IWeather | null = null;
        if (data && data.statusText === "OK") {
            result = {
                feels_like: data.data.main.feels_like,
                humidity: data.data.main.humidity,
                pressure: data.data.main.pressure,
                temp: data.data.main.temp,
                temp_max: data.data.main.temp_max,
                temp_min: data.data.main.temp_min,
                weather: [
                    {
                        description: data.data.weather[0].description,
                        id: data.data.weather[0].id,
                        main: data.data.weather[0].main
                    }
                ],
                name: data.data.name,
                visibility: data.data.visibility,
                windSpeed: data.data.wind.speed,
                windGust: data.data.wind.gust,
                windDeg: data.data.wind.deg
            }

        }

        res.status(200).json({
            data: result
        })
    } catch (e: any) {
        res.status(400).json({
            error: e.message
        })
    }
}

