import { AxiosResponse } from "axios";
import { Action } from "redux";
import { ICity, IWeather, ReduxMainStore } from "../../types";

interface ActionWithPayload extends Action {
    payload: {
        today_weather_data?: AxiosResponse<any, IWeather>,
        another_day?: AxiosResponse<any, IWeather[]>,
        current_measurement?: 'c' | 'f',
        cities?: { data: ICity[] },
        lat?: number,
        lon?: number
    }
}

export const Main = (store: ReduxMainStore | undefined, action: ActionWithPayload): ReduxMainStore => {
    switch (action.type) {
        case "__INIT__":
            if (
                action.payload.today_weather_data &&
                action.payload.another_day &&
                action.payload.current_measurement &&
                action.payload.lat && action.payload.lon &&
                store
            ) {
                return {
                    weatherData: {
                        today: action.payload.today_weather_data.data,
                        another_day: action.payload.another_day.data
                    },
                    current_city: {
                        today: action.payload.today_weather_data.data,
                        another_day: action.payload.another_day.data,
                        lat: action.payload.lat,
                        lon: action.payload.lon
                    },
                    current_measurement: action.payload.current_measurement,
                    cities: [],
                }
            }
        case "SET_CURRENT_CITY_WEATHER":
            if (store) {
                return {
                    ...store,
                    weatherData: {
                        today: store.current_city.today,
                        another_day: store.current_city.another_day
                    }
                }
            }
        case "SET_CITY_WEATHER":
            if (
                action.payload.today_weather_data &&
                action.payload.another_day &&
                store
            ) {
                return {
                    ...store,
                    weatherData: {
                        today: action.payload.today_weather_data.data,
                        another_day: action.payload.another_day.data
                    },
                }
            }
        case "CHANGE_MEASUREMENT":
            if (action.payload.current_measurement && store) {
                return {
                    ...store,
                    current_measurement: action.payload.current_measurement
                }
            }
        case "SET_CITIES":
            if (action.payload.cities && store) {
                return {
                    ...store,
                    cities: action.payload.cities.data
                }
            }
        case "RESET_CITIES":
            if (store) {
                return {
                    ...store,
                    cities: null
                }
            }
        case "RESET_SEARCH":
            if (store) {
                return {
                    ...store,
                    cities: []
                }
            }
        default:
            return store || {
                weatherData: {
                    today: null,
                    another_day: []
                },
                current_city: {
                    today: null,
                    another_day: [],
                    lat: 0,
                    lon: 0
                },
                current_measurement: 'c',
                cities: [],
            }
    }
}