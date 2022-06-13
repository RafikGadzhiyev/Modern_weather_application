import { Action } from "redux";

export const SetCurrenCityWeather: () => Action = () => {
    return {
        type: "SET_CURRENT_CITY_WEATHER"
    }
}