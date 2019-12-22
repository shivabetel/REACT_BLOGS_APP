import { srcGetAllUsers } from '../../sources/users';
import { startFetchTemplate, updateFetchTemplate, errorFetchTemplate } from '../common';
import { _STATE_NAME_SPACES } from '../../store/constants';

const _stateNameSpace = _STATE_NAME_SPACES['USERS'];

const startFetch = startFetchTemplate(_stateNameSpace);
const updateFetch = updateFetchTemplate(_stateNameSpace);
const errorFetch = errorFetchTemplate(_stateNameSpace);

export function actionGetAllUsers () {
    let response = {};
    return async (dispatch, getState) => {
        try{
            dispatch(startFetch({}));
            response =  await srcGetAllUsers();
            dispatch(updateFetch({...response}));
        }catch(err){
            dispatch(errorFetch(err));
        }
        

    }
}