export interface IWeather extends IWind {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_min: number,
    temp_max: number,
    weather: Array<WeatherData>,
    name: string,
    visibility: number,
    dt?: number
}

export interface IWind {
    windDeg: number,
    windGust: number,
    windSpeed: number
}

export interface ReduxMainStore {
    weatherData: {
        today: IWeather | null,
        another_day: Array<IWeather>
    },
    current_city: {
        today: IWeather | null,
        another_day: Array<IWeather>,
        lat: number,
        lon: number
    },
    current_measurement: 'c' | 'f',
    cities: Array<ICity> | null,
}

export interface ICity {
    name: string,
    lat: number,
    lon: number,
    country: string,
}

export type WeatherData = {
    description: string,
    id: number,
    main: string
}

export type WeatherIcons = {
    [key: string]: string
}
