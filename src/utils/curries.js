import mockUtil from './mock';
import config from '../config';

export const apiCallHandler = (f) => ({mockFunction = ''}) => {
    return (...args) => {
        const isMockMode = config.isMockMode;
        return new Promise((resolve, reject) => {
            if(isMockMode === 'Y'){
                mockUtil[mockFunction]().then(res => {
                    console.log("res",res);
                    resolve(res)
                });
            }
            else{
                f.call(this, Array.prototype.slice.call(args)[0])
                .then(res => resolve(res))
                .catch((err) => {
                    if(config.isMockMode === 'Y'){
                        mockUtil[mockFunction]().then(res => resolve(res));
                    }

                    reject(err);
                })
            }
        });
    }
} 