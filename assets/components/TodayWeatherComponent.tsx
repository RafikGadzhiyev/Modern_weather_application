import React from "react";
import Image from "next/image";
import { BackgroundCloudIcon, CityDataContainer, CurrentTemperature, DateContainer, GetCurrentCityWeatherbutton, Measurement, OptionsContainer, SearchButton, StyledDot, TodayWeatherContainer, WeatherDataContainer, WeatherIconContainer, WeatherType } from './StyledComponents'
import { ReduxMainStore, WeatherIcons } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { convertCelsuis, convertToDate } from "../functions";
import Icon from 'bootstrap-icons/icons/cloud-haze-fill.svg'
import { SearchContainer } from "./SearchContainerComponent";
import { getCityWeather } from "../redux/actions/getCityWeather.action";
import { SetCurrenCityWeather } from "../redux/actions/setCurrentCity.action";

export const TodayWeather: React.FC = () => {
    const store: ReduxMainStore = useSelector((store: ReduxMainStore) => store);
    const dispatch: React.Dispatch<any> = useDispatch();
    const [isOpened, setIsOpened]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState<boolean>(false);
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

    return (
        store.weatherData.today &&
        <TodayWeatherContainer>
            <SearchContainer
                isOpened={isOpened}
                setIsOpened={setIsOpened}
            />
            <OptionsContainer>
                <SearchButton
                    onClick={() => setIsOpened(() => true)}
                >
                    Search for places
                </SearchButton>
                <GetCurrentCityWeatherbutton
                    onClick={() => dispatch(SetCurrenCityWeather())}
                >
                    <i className="bi bi-bullseye"></i>
                </GetCurrentCityWeatherbutton>
            </OptionsContainer>
            <WeatherIconContainer>
                <BackgroundCloudIcon className="bi bi-cloud-fill c-1"></BackgroundCloudIcon>
                <BackgroundCloudIcon className="bi bi-cloud-fill c-2"></BackgroundCloudIcon>
                <Image
                    src={WeatherStateIcons.current[store.weatherData.today.weather[0].main.toLowerCase()]}
                    alt='Weather state icon'
                    width={150}
                    height={150}
                />
                <BackgroundCloudIcon className="bi bi-cloud-fill c-3"></BackgroundCloudIcon>
                <BackgroundCloudIcon className="bi bi-cloud-fill c-4"></BackgroundCloudIcon>
            </WeatherIconContainer>
            <WeatherDataContainer>
                <CurrentTemperature>
                    {store.current_measurement === 'c' ? Math.floor(store.weatherData.today.temp) : Math.floor(convertCelsuis(store.weatherData.today.temp))}
                    <Measurement>
                        <sup>o</sup>{store.current_measurement.toUpperCase()}
                    </Measurement>
                </CurrentTemperature>
                <WeatherType>
                    {
                        store.weatherData.today.weather[0].main
                    }
                </WeatherType>
                <DateContainer>
                    <span>
                        today
                    </span>
                    <StyledDot>
                        .
                    </StyledDot>
                    {convertToDate(new Date())}
                </DateContainer>
                <CityDataContainer>
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>
                        {store.weatherData.today.name}
                    </span>
                </CityDataContainer>
            </WeatherDataContainer>
        </TodayWeatherContainer>
    )
}