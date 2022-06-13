import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';
import { ICity } from '../../assets/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const API_KEY = process.env.API_KEY;
        const { query } = req.body;
        const result: AxiosResponse<any, any> = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`);
        const cities: ICity[] = [];
        for (let cityData of result.data) {
            cities.push({
                name: cityData.name,
                country: cityData.country,
                lat: cityData.lat,
                lon: cityData.lon
            })
        }
        res.status(200).json({
            data: cities
        })
    } catch (e: any) {
        res.status(400).json({
            error: e
        })
    }
}