import styled, { StyledComponent, StyledComponentInnerComponent } from "styled-components";
import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";

export const ContentContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;

    @media screen and  (max-width: 1300px){
        flex-direction: column;
    }

`

export const TodayWeatherContainer: StyledComponent<'aside', any, {}> = styled.aside`
    background-color: #1E213A;
    width: 25%;
    flex-grow: 1;
    color: #88869D;
    padding: 1rem;
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1300px){
        width: 100%;
    }

`

export const OptionsContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const SearchButton: StyledComponent<'button', any, {}> = styled.button`
    background-color: #6E707A;
    padding: .5rem 1rem;
    color: #fff;
    box-shadow: 0 3px 3px -1px #000;
    transition: 300ms ease;
    position: relative;
    z-index: 10;

    &:hover{
        background-color: #7a7b83
    }

    &:active{
        box-shadow: none;
    }

`;
export const GetCurrentCityWeatherbutton: StyledComponent<'button', any, {}> = styled.button`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: #6E707A;
    color: #fff;
    box-shadow: 1px 3px 3px -1px #000;
    transition: 300ms ease;
    position: relative;
    z-index: 10;

    &:hover{
        background-color: #7a7b83
    }

    &:active{
        box-shadow: none;
    }
`;

export const WeatherIconContainer: StyledComponent<'div', any, {}> = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &>span{
        transform: translateX(-10px);
        z-index: 10;
        position: relative;
    }

`

export const BackgroundCloudIcon: StyledComponent<'i', any, {}> = styled.i`
    position: absolute;
    opacity: .3;
    z-index: 0;
    
    &.c-1{
        left: -4%;
        top: 12%;
        font-size: 10rem;
    }
    &.c-2{
        left: -4%;
        top: 60%;
        font-size: 8rem;
    }
    &.c-3{
        right: -10%;
        top: 12%;
        font-size: 10rem;
    }
    &.c-4{
        right: -7%;
        bottom: 22%;
        font-size: 7rem;
    }

    @media screen and (max-width: 350px){
        display: none;
    }

`

export const CurrentTemperature: StyledComponent<'h1', any, {}> = styled.h1`
    color: #fff;
    font-size: 5rem;
    margin-bottom: 4rem;
`

export const WeatherDataContainer: StyledComponent<'div', any, {}> = styled.div`
    text-align: center;
`

export const Measurement: StyledComponent<'span', any, {}> = styled.span`
    color: #a09fb1;
    font-size: 3rem;
`

export const WeatherType: StyledComponent<'span', any, {}> = styled.span`
    color: #A09FB1;
    text-align: center;
    font-size: 2.2rem;
`

export const DateContainer: StyledComponent<'div', any, {}> = styled.div`
    margin-top: 4rem;
    font-size: 1.2rem;
    display: flex;
    gap: .5rem;
    justify-content: center;
    align-items: center;
`

export const StyledDot: StyledComponent<'span', any, {}> = styled.span`
    font-size: 2rem;
    font-weight: 700;
    transform: translateY(-5px);
`;

export const CityDataContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    gap: .25rem;
    justify-content: center;
    margin-block: 2rem 1rem;
`

export const MainContentContainer: StyledComponent<'main', any, {}> = styled.main`
    width: 75%;
    color: white;
    
    @media screen and (max-width: 1300px){
        width: 100%;
    }

`;

export const TodayWeatherDetailsSection: StyledComponent<'section', any, {}> = styled.section`
    margin-top: 3rem;
`

export const TodayWeatherDetailsWrapper: StyledComponent<'div', any, {}> = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const TodayWeatherDetailsContentContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    margin-top: 3rem;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem 3rem;
`

export const DetailContainer: StyledComponent<'div', any, {}> = styled.div`
    width: 400px;
    min-height: 150px;
    background-color: #1E213A;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    padding-block: 1rem 2rem;    

    @media screen and (max-width: 450px){
        width: 100%;
        font-size: 1rem;
    }

`

export const DetailName: StyledComponent<'span', any, {}> = styled.span`
    font-weight: thin;
`;

export const DetailValue: StyledComponent<'span', any, {}> = styled.span`
    font-size: 4rem;
    font-weight: bold;

    @media screen and (max-width: 450px){
        font-size: 2rem;
    }

`

export const DetailMeasurement: StyledComponent<'span', any, {}> = styled.span`
    font-weight: bold;
    font-size: 2rem;

    @media screen and (max-width: 450px){
        font-size: 1rem;
    }

`

export const HumidityContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-inline: 3rem;
    align-items: center;

    @media screen and (max-width: 450px){
        padding-inline: 1rem;
    }

`

export const CurrentHumidity: StyledComponent<'span', any, {}> = styled.span`
    font-size: 4rem;
    font-weight:bold;

    @media screen and (max-width: 450px){
        font-size: 2rem;
    }

`

export const HumidityMeterContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    margin-top: 1rem;
    width: 100%;
    flex-direction: column;
`

export const HumidityMeterPointsContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: .25rem;
    color: #A09FB1;
    position: relative;
    
    &::after{
        content: "%";
        position:absolute;
        right: 0;
        bottom: -30px;
    }

`;

export const HumidityMeter: StyledComponent<'div', any, {}> = styled.div`
    width: 100%;
    height: 10px;
    background-color: #E7E7EB;
    border-radius: 5px;
    overflow: hidden;
`;
export const HumidityMeterValue: StyledComponent<ForwardRefComponent<HTMLDivElement, HTMLMotionProps<'div'>>, any, {}> = styled(motion.div)`
    background-color: #FFEC65;
    height: inherit;
`

export const WindDirectionIcon: StyledComponent<ForwardRefComponent<HTMLDivElement, HTMLMotionProps<'div'>>, any, {}> = styled(motion.div)`
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, .3);
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
`

export const WindDirectionContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: row-reverse;
    margin-top: 1rem;
    gap: .5rem;
`

export const StyledAnotherDaysContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    gap: 1.7rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-block: 2rem;
    padding-inline: 2rem;
`;

export const StyledAnotherDay: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height:180px;
    background-color: #1E213A;
    padding-block: 1rem;
    gap: 1rem;
`

export const TemperaturesContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-inline: 2rem;
    align-items: flex-end;
`
export const MinTemperature: StyledComponent<'span', any, {}> = styled.span`
    color: #A09FB1;
    font-size: .8rem;
`
export const StyledMeasurementsContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: flex-end;
    // padding-inline: 17.5rem;
    margin-block: 2rem 1rem;
    gap: 1rem;
`

export const StyledMeasurement: StyledComponent<'button', any, {}> = styled.button`
    border-radius: 50%;
    cursor: pointer;
    background-color: #585676;
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    transition: 300ms ease;
    font-weight: bold;
    text-align: center;
    line-height: 1.5rem;

    &:hover{
        background-color: rgba(255, 255, 255, .5);
    }

    &.current{
        background-color: white;
        color: #110E3C;
    }

`

export const SearchFormContainer: StyledComponent<ForwardRefComponent<HTMLDivElement, HTMLMotionProps<'div'>>, any, {}> = styled(motion.div)`
    width: 25%;
    background-color: #1E213A;
    color: white;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1300px){
        width:100%;
    }

`

export const CloseSearchFormButton: StyledComponent<'button', any, {}> = styled.button`
    font-size: 2rem;
    margin-left: 92%;
`

export const StyledSearchForm: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
`

export const InputContainer: StyledComponent<'div', any, {}> = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    outline: 1px solid #E7E7EB;
    height: auto;
    padding-left: .5rem;
    gap: .25rem;
    color: #616475;
`

export const StyledInput: StyledComponent<'input', any, {}> = styled.input`
    all: unset;
    cursor: text;
    height: inherit;
    width: 100%;
    text-indent: .5rem;
    padding-block: .7rem;
    color: #fff;
`

export const SearchFormButton: StyledComponent<'button', any, {}> = styled.button`
    background-color: #3C47E9;
    padding: .75rem 1rem;
    color: white;
    transition: 300ms ease;


    &:hover{
        background-color: #3c47d3;
    }

    &:disabled{
        background-color: white;
    }

`

export const StyledCitiesList: StyledComponent<'ul', any, {}> = styled.ul`
    margin-top: 3rem;
    list-style: none;
    height: 100%;
    width: 100%;
`

export const StyledCity: StyledComponent<'li', any, {}> = styled.li`
    transition: 300ms ease;
    width: inherit;
    position: relative;

`

export const SelectCityButton: StyledComponent<'button', any, {}> = styled.button`
    width: 100%;
    padding: 1.5rem .5rem;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 300ms ease;

    &:first-of-type{ 
        margin-top: .25rem;
    }

    &>.right-icon{
        transition: 300ms ease;
        opacity: 0;
    }

    &::after{
        content: '';
        position: absolute;
        left: 0;
        top: -50%;
        transform: translateY(50%);
        width: 0;
        height: 100%;
        transition: 300ms ease;
    }
    
    &:hover,
    &:active{
        &::after{
            outline: 2px solid white;
            outline-color: white;
            width: 100%;
        }

        &>.right-icon{
            opacity: 1;
            transition: 300ms ease 300ms;
        }
    }

    &:active{
        background-color: rgba(255, 255, 255, 0.3)
    }

`
