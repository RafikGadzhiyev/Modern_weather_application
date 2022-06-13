import Image from "next/image"
import React from "react";
import { useSelector } from 'react-redux'
import { convertCelsuis, convertToDate } from "../functions"
import { IWeather, ReduxMainStore, WeatherIcons } from "../types"
import { MinTemperature, StyledAnotherDay, TemperaturesContainer } from "./StyledComponents"
import Icon from 'bootstrap-icons/icons/cloud-haze-fill.svg'

interface IProps extends React.PropsWithChildren {
    weather: IWeather,
    index: number
}

export const AnotherDay: React.FC<IProps> = ({ weather, index }) => {
    const measurement: 'c' | 'f' = useSelector((store: ReduxMainStore) => store.current_measurement);
    const WeatherStateIcons: React.MutableRefObject<WeatherIcons> = React.useRef({
        clear: require('./../icons/Clear.png'),
        hail: require('./../icons/Hail.png'),
        heavyRain: require('./../icons/HeavyRain.png'),
        clouds: require('./../icons/LightCloud.png'),
        rain: require('./../icons/Shower.png'),
        drizzle: require('./../icons/Shower.png'),
        sleet: require('./../icons/Sleet.png'),
        snow: require('./../icons/Snow.png'),
        thunderstorm: require('./../icons/Thunderstorm.png'),
        mist: require('bootstrap-icons/icons/cloud-haze-fill.svg'),
        smoke: require('bootstrap-icons/icons/cloud-haze-fill.svg'),
        haze: Icon,
        dust: require('bootstrap-icons/icons/cloud-haze-fill.svg'),
        fog: require('bootstrap-icons/icons/cloud-haze-fill.svg'),
        sand: require('bootstrap-icons/icons/cloud-haze-fill.svg'),
        ash: require('bootstrap-icons/icons/cloud-haze-fill.svg'),
        squall: require('bootstrap-icons/icons/cloud-haze-fill.svg'),
        tornado: require('bootstrap-icons/icons/cloud-haze-fill.svg'),
    })

    return <StyledAnotherDay>
        <span>
            {
                index > 0 ? convertToDate(new Date(weather.dt || 0)) : 'Tomorrow'
            }
        </span>
        <Image
            src={WeatherStateIcons.current[weather.weather[0].main.toLowerCase()]}
            alt='Weather state icon'
            width={75}
            height={75}
        />
        <TemperaturesContainer>
            <span>{measurement === 'c' ? Math.floor(weather.temp_max) : Math.floor(convertCelsuis(weather.temp_max))}<sup>o</sup>{measurement.toUpperCase()}</span>
            <MinTemperature>{measurement === 'c' ? Math.floor(weather.temp_min) : Math.floor(convertCelsuis(weather.temp_min))}<sup>o</sup>{measurement.toUpperCase()}</MinTemperature>
        </TemperaturesContainer>
    </StyledAnotherDay>
}