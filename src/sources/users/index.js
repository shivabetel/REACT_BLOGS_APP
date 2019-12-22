import HttpLib from '../../network'
import UsersApiRegistry from './api-registry';
import { apiCallHandler } from '../../utils/curries';

async function getAllUsers () {
  let response = {}
  let options = {};
  try{
    const httpLib = new HttpLib ();
    const apiPath = UsersApiRegistry.getPath('getAllUsers', options);
    response = await httpLib.get(apiPath, options);
    return new Promise(resolve => resolve(response));
    
  }catch(err) {
      return new Promise((resolve,reject) => reject(err))
  }
}


export const srcGetAllUsers = apiCallHandler(getAllUsers)({mockFunction: 'mockUsers'})