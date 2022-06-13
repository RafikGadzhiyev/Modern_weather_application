import React from "react"
import { useDispatch } from "react-redux";
import { getCities } from "../redux/actions/getCities.action";
import { InputContainer, SearchFormButton, StyledInput, StyledSearchForm } from "./StyledComponents"


interface IProps extends React.PropsWithChildren {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchForm: React.FC<IProps> = ({ setOpen }) => {
    const dispatch: React.Dispatch<any> = useDispatch();
    const SearchInputRef: React.MutableRefObject<HTMLInputElement | null> = React.useRef<HTMLInputElement | null>(null);

    const searchCitiesByQuery = () => {
        if (SearchInputRef.current) {
            let query: string = SearchInputRef.current.value;
            if (!query) return;
            dispatch(getCities(query));
            setOpen(() => true);
            SearchInputRef.current.value = '';
        }
    }

    return <StyledSearchForm>
        <InputContainer>
            <i className="bi bi-search"></i>
            <StyledInput
                type="text"
                placeholder="search location"
                as={StyledInput}
                ref={SearchInputRef}
            />
        </InputContainer>
        <SearchFormButton
            onClick={() => searchCitiesByQuery()}
        >Search</SearchFormButton>
    </StyledSearchForm>
}