import { useSelector } from 'react-redux'
import { ICity, ReduxMainStore } from '../types'
import { v4 as uuid4 } from 'uuid'
import { City } from './CityComponent';
import React from 'react';
import { StyledCitiesList } from './StyledComponents';

export const CitiesList: React.FC = () => {
    const cities: ICity[] | null = useSelector((store: ReduxMainStore) => store.cities);

    return <StyledCitiesList>
        {cities && !!cities.length &&
            cities.map((e: ICity, i: number) => <City
                city={e}
                key={uuid4()}
            />)
        }
    </StyledCitiesList>
}