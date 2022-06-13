import { legacy_createStore as CreateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { Main } from "./../reducers/main.reducer";


export const store = CreateStore(Main, applyMiddleware(thunk, logger));