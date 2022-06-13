import axios from "axios"

export const getCities = (query: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: "RESET_CITIES"
        })
        const [
            CitiesData
        ] = await Promise.all([
            axios.post('api/get_five_cities', { query }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        ]);

        dispatch({
            type: "SET_CITIES",
            payload: {
                cities: CitiesData.data
            }
        })
    }
}