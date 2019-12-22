import { combineReducers } from 'redux';
import { routes } from '../routes';

import { reducerTemplate } from './common'
const initialState = {};


const rootReducer = {}
routes.forEach((route) => {
    rootReducer[route.name] = reducerTemplate(route.name)
});

rootReducer['global'] = reducerTemplate('global');


export default combineReducers(rootReducer);