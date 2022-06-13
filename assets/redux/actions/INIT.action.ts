import axios from "axios"

export const __INIT__ = (lat: number, lon: number): (dispatch: any) => void => {
    return async (dispatch) => {
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
            type: "__INIT__",
            payload: {
                today_weather_data: todayData.data,
                another_day: anotherDaysData.data,
                current_measurement: 'c',
                lat, lon
            }
        })

    }
}