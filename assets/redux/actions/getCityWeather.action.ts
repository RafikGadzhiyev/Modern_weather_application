import axios from 'axios';

export const getCityWeather = (lat: number, lon: number) => {
    return async (dispatch: any) => {
        const [
            todayData,
            anotherDaysData
        ] = await Promise.all([
            axios.post('api/get_today_weather', { lat, lon }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            ),
            axios.post('api/get_five_days_weather', { lat, lon }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            )
        ])

        dispatch({
            type: "SET_CITY_WEATHER",
            payload: {
                today_weather_data: todayData.data,
                another_day: anotherDaysData.data
            }
        })

    }
}