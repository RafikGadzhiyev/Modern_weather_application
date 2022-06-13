import { useSelector } from 'react-redux'
import { StyledMeasurementsContainer } from "./StyledComponents";
import { Measurement } from './MeasurementComponent'
import { ReduxMainStore } from '../types';

export const MeasurementsContainer: React.FC = () => {
    const current_measurement: 'c' | 'f' = useSelector((store: ReduxMainStore) => store.current_measurement)

    return <StyledMeasurementsContainer>
        <Measurement
            isCurrent={current_measurement === 'c'}
            measurement={'c'}
        >
            <sup>o</sup>C
        </Measurement>
        <Measurement

            isCurrent={current_measurement === 'f'}
            measurement={'f'}
        >
            <sup>o</sup>F
        </Measurement>
    </StyledMeasurementsContainer>
}