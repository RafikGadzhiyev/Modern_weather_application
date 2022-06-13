import React from 'react'
import { useDispatch } from 'react-redux'
import { getCityWeather } from '../redux/actions/getCityWeather.action'
import { ICity } from "../types"
import { SelectCityButton, StyledCity } from "./StyledComponents"

interface IProps extends React.PropsWithChildren {
    city: ICity
}

export const City: React.FC<IProps> = ({ city }) => {
    const dispatch: React.Dispatch<any> = useDispatch();

    return (<StyledCity>
        <SelectCityButton
            onClick={() => dispatch(getCityWeather(city.lat, city.lon))}
        >
            <span>
                {city.name}, {city.country}
            </span>
            <i className="bi bi-chevron-right right-icon"></i>
        </SelectCityButton>
    </StyledCity>)
}