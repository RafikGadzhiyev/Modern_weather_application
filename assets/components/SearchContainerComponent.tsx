import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import { SearchFormVariants } from "../variants"
import { CitiesList } from "./CitiesListComponent"
import { SearchForm } from "./SearchFormComponent"
import { CloseSearchFormButton, SearchFormContainer } from "./StyledComponents"
import { ICity, ReduxMainStore } from '../types';
import Reset from '../redux/actions/reset.action';

interface IProps extends React.PropsWithChildren {
    isOpened: boolean,
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchContainer: React.FC<IProps> = ({ isOpened, setIsOpened }) => {
    const dispatch: React.Dispatch<any> = useDispatch();
    const cities: ICity[] | null = useSelector((store: ReduxMainStore) => store.cities);
    const [open, setOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState<boolean>(false);

    const SnackBarCloseHandler = (e?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpen(() => false);
    }

    return <SearchFormContainer
        initial={'disabled'}
        animate={isOpened ? 'activated' : 'disabled'}
        variants={SearchFormVariants}
        transition={{
            type: 'tween'
        }}
    >
        <CloseSearchFormButton
            onClick={() => { setIsOpened(() => false); dispatch(Reset()) }}
        >
            <i className="bi bi-x-lg"></i>
        </CloseSearchFormButton>
        <SearchForm
            setOpen={setOpen}
        />
        {
            !cities &&
            <CircularProgress
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
                color="primary"
            />
        }
        {
            cities && !cities.length &&
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={SnackBarCloseHandler}
            >
                <Alert onClose={SnackBarCloseHandler} severity='info' sx={{ width: '100%' }}>
                    Nothing found! Please, search again!
                </Alert>
            </Snackbar>
        }

        {
            cities && !!cities.length &&
            <CitiesList />
        }
    </SearchFormContainer>
}