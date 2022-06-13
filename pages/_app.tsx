import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { store } from '../assets/redux/store/store'
import { createGlobalStyle } from 'styled-components'

import 'bootstrap-icons/font/bootstrap-icons.css';
import './../styles/fonts.css'
import './../styles/customs.css'

const GlobaLStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body{
		width: 100%;
		min-height: 100vh;
		background-color:#100E1D;
		box-sizing: border-box;
		font-family: "Raleway"
	}

	button,
	a{
		all: unset;
		cursor: pointer;
	}
`


function MyApp({ Component, pageProps }: AppProps) {
	return <Provider
		store={store}
	>
		<GlobaLStyles />
		<Component {...pageProps} />
	</Provider>
}

export default MyApp
