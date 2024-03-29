import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { NextPage } from 'next'
import Head from 'next/head'
import { __INIT__ } from '../assets/redux/actions/INIT.action';
import { ReduxMainStore } from '../assets/types';
import { TodayWeather } from '../assets/components/TodayWeatherComponent';
import { ContentContainer, MainContentContainer } from '../assets/components/StyledComponents';
import { TodayWeatherDetails } from '../assets/components/TodayWeatherDetailsConponent';
import { AnotherDaysContainer } from '../assets/components/AnotherDaysContainerComponent';
import { MeasurementsContainer } from '../assets/components/MeasurementsContainerComponent';

const Home: NextPage = () => {
	const store: ReduxMainStore = useSelector((store: ReduxMainStore) => store);
	const dispatch: React.Dispatch<any> = useDispatch();
	const once: React.MutableRefObject<number> = React.useRef(1);

	React.useEffect(() => {
		if (once.current || store.current_city) {
			const currentPosition = {
				latitude: 43.2363924,
				longitude: 76.9457275,
			};

			window.navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
				currentPosition.latitude = position.coords.latitude;
				currentPosition.longitude = position.coords.longitude;
			});
			dispatch(__INIT__(
				currentPosition.latitude,
				currentPosition.longitude,

			))
			once.current--;
		}
	}, [store.current_city.lat, store.current_city.lon, dispatch])

	return (
		<ContentContainer>
			<Head>
				<title>Weather application</title>
				<meta name="description" content="Weather application, city weather" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TodayWeather />
			<MainContentContainer>
				<MeasurementsContainer />
				<AnotherDaysContainer />
				<TodayWeatherDetails />
			</MainContentContainer>
		</ContentContainer>
	)
}

export default Home