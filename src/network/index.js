import axios from 'axios';
import httpModule from 'http';

const networkAgent = new httpModule.Agent({
    keepAlive: true,
    maxSockets: 75,
    maxFreeSockets: 50
})

const defaultApiTimeout = 10000;

const defaultApiHeaders = {};

const defaultApiOptions = options => {
    return Object.assign({
        baseURL: '',
        withCredentials: false,
        headers: Object.assign({}, { ...defaultApiHeaders }, (options.headers || {})),
        timeout: options.apiTimeOut || defaultApiTimeout,
        params: {},//`params` are the URL parameters to be sent with the 
        paramsSerializer: function (params) {// `paramsSerializer` is an optional function in charge of serializing `params`
            // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
            //return Qs.stringify(params, { arrayFormat: 'brackets' })
        },
        // `validateStatus` defines whether to resolve or reject the promise for a given
        // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
        // or `undefined`), the promise will be resolved; otherwise, the promise will be
        // rejected.
        validateStatus: function (status) {
            console.log("validateStatus");
            return status >= 200 && status < 300; // default
        },
        transformRequest: [(data, headers) => {
            const commonBody = {};
            //data = Object.assign({ 'payload': { ...data } }, commonBody);
            data = Object.assign({}, {...data}, {...commonBody})
            return JSON.stringify(data);

        }],
        transformResponse: [(response) => {
            console.log("transformresponse");
            return JSON.parse(response);
        }],
        onUploadProgress: (progressEvent) => {// `onUploadProgress` allows handling of progress events for uploads

        },
        // `onDownloadProgress` allows handling of progress events for downloads
        onDownloadProgress: function (progressEvent) {

        }

    }, (options || {}))
}

class HttpLib {
    constructor() {
        this.axiosAgent = axios.create({ httpAgent: networkAgent })
    }

    jsonGet (apiEndpoint, options = {}) {
       return this.axiosAgent({
           method: 'GET',
           url: apiEndpoint,
           ...defaultApiOptions(options)
       }).then(response => new Promise(resolve => resolve(response)))
       .catch(err => new Promise((resolve, reject) => reject(err)))
    }

    jsonPost (apiEndpoint, options = {}) {
      options.headers = {
          'Content-Type': 'application/json'
      }
      return this.axiosAgent({
          url: apiEndpoint,
          method: 'POST',
          ...defaultApiOptions(options)
      }).then((response) => {
              return new Promise(resolve => resolve(response))
      }).catch(err => {
          return new Promise((resolve,reject) => reject(err))
      })
    }


    get(apiEndpoint, options={}) {
        const getTypes = {
            json: this.jsonGet.bind(this)
        }

        const get = getTypes[options.type || 'json'] || getTypes.json;
        return get(apiEndpoint,options);
    }


    post (apiEndpoint, options = {}) {
        const postTypes = {
            json: this.jsonPost.bind(this)
        }

        const post = postTypes[options.type || 'json'] || postTypes.json;
        return post(apiEndpoint, options);
    }


}


export default HttpLib;