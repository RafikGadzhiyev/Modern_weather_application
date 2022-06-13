import React from 'react';
import { useSelector } from 'react-redux';
import { convertMeters } from '../functions';
import { IWeather, ReduxMainStore } from '../types';
import { Detail } from "./DetailComponent"
import { SearchContainer } from './SearchContainerComponent';
import { CurrentHumidity, DetailMeasurement, DetailName, DetailValue, HumidityContainer, HumidityMeter, HumidityMeterContainer, HumidityMeterPointsContainer, HumidityMeterValue, TodayWeatherDetailsContentContainer, TodayWeatherDetailsSection, TodayWeatherDetailsWrapper, WindDirectionContainer, WindDirectionIcon } from "./StyledComponents"

export const TodayWeatherDetails: React.FC = () => {
    const store: ReduxMainStore = useSelector((store: ReduxMainStore) => store);
    const [miles, setMiles]: [number, React.Dispatch<React.SetStateAction<number>>] = React.useState<number>(0)
    const WIND_DIRECTIONS: React.MutableRefObject<string[]> = React.useRef<string[]>(['N', 'NbE', 'NNE', 'NEbN', 'NE', 'NEbE', 'ENE', 'EbN', 'E', 'EbS', 'ESE', 'SEbE', 'SE', 'SEbS', 'SSE', 'SbE', 'SbE', 'S', 'SbW', 'SSW', 'SWbS', 'SW', 'SWbW', 'WSW', 'WbS', 'W', 'WbN', 'WW', 'NWbW', 'NW', 'NWbN', 'NNW', 'NbW'])

    React.useEffect(() => {
        if (store.weatherData.today) {
            let weather: IWeather = store.weatherData.today;
            setMiles(() => convertMeters(weather.visibility, 'ml'));
        }
    }, [store.weatherData.today])

    return (
        <TodayWeatherDetailsSection>
            {
                store.weatherData.today &&
                <TodayWeatherDetailsWrapper>
                    <h1>Today&apos;s Highlights</h1>
                    <TodayWeatherDetailsContentContainer>
                        <Detail>
                            <DetailName>
                                Wind status
                            </DetailName>
                            <span>
                                <DetailValue>
                                    {store.weatherData.today.windSpeed}
                                </DetailValue>
                                <DetailMeasurement> mph</DetailMeasurement>
                            </span>
                            <WindDirectionContainer>
                                {WIND_DIRECTIONS.current[parseInt(store.weatherData.today.windDeg / 10 + '') % 35]}
                                <WindDirectionIcon
                                    initial={{
                                        rotate: 0
                                    }}
                                    animate={{
                                        rotate: (-45 + store.weatherData.today.windDeg)
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: .4
                                    }}
                                >
                                    <i
                                        className="bi bi-cursor-fill "

                                    >
                                    </i>
                                </WindDirectionIcon>
                            </WindDirectionContainer>
                        </Detail>
                        <Detail>
                            <DetailName>Humidity</DetailName>
                            <HumidityContainer>
                                <CurrentHumidity>
                                    {store.weatherData.today.humidity}%
                                </CurrentHumidity>
                                <HumidityMeterContainer>
                                    <HumidityMeterPointsContainer>
                                        <span>
                                            0
                                        </span>
                                        <span>
                                            50
                                        </span>
                                        <span>
                                            100
                                        </span>
                                    </HumidityMeterPointsContainer>
                                    <HumidityMeter>
                                        <HumidityMeterValue
                                            initial={{
                                                width: 0
                                            }}
                                            animate={{
                                                width: `${store.weatherData.today.humidity}%`
                                            }}
                                            transition={{
                                                delay: .4
                                            }}
                                        >

                                        </HumidityMeterValue>
                                    </HumidityMeter>
                                </HumidityMeterContainer>
                            </HumidityContainer>
                        </Detail>
                        <Detail>
                            <DetailName>Visibility</DetailName>
                            <span>
                                <DetailValue>
                                    {new Intl.NumberFormat('US').format(+miles.toFixed(1))}
                                </DetailValue>
                                <DetailMeasurement> mile{
                                    miles > 1 ? 's' : ''
                                }</DetailMeasurement>
                            </span>
                        </Detail>
                        <Detail>
                            <DetailName>Air pressure</DetailName>
                            <span>
                                <DetailValue>
                                    {store.weatherData.today.pressure}
                                </DetailValue>
                                <DetailMeasurement> mb</DetailMeasurement>
                            </span>
                        </Detail>
                    </TodayWeatherDetailsContentContainer>
                </TodayWeatherDetailsWrapper>
            }
        </TodayWeatherDetailsSection>
    )
}