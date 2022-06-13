import { useDispatch } from 'react-redux'
import { changeMeasurement } from '../redux/actions/changeMeasurement.action';
import { StyledMeasurement } from "./StyledComponents"

interface IProps extends React.PropsWithChildren {
    isCurrent: boolean,
    measurement: 'c' | 'f'
}

export const Measurement: React.FC<IProps> = ({ isCurrent, children, measurement }) => {
    const dispatch: React.Dispatch<any> = useDispatch();

    return <StyledMeasurement
        className={isCurrent ? 'current' : ''}
        onClick={() => dispatch(changeMeasurement(measurement))}
    >
        {children}
    </StyledMeasurement>
}