import { useSelector } from 'react-redux';
import { IWeather, ReduxMainStore } from '../types';
import { AnotherDay } from './AnotherDayComponent';
import { StyledAnotherDaysContainer } from './StyledComponents';
import { v4 as uuid4 } from 'uuid'

export const AnotherDaysContainer: React.FC = () => {
    const store: ReduxMainStore = useSelector((store: ReduxMainStore) => store);
    return (<StyledAnotherDaysContainer>
        {
            store.weatherData.another_day &&
            store.weatherData.another_day.map((e: IWeather, index: number) => <AnotherDay
                key={uuid4()}
                weather={e}
                index={index}
            />)
        }
    </StyledAnotherDaysContainer>)
}