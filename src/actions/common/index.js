export function updateFetchTemplate(stateNameSpace = 'global'){
    return (payload) => {
        return {
            type: `${stateNameSpace}_UPDATE`,
            payload: {...payload, isLoading: false, isError: false},
            stateNameSpace
        }
    }
}

export function errorFetchTemplate(stateNameSpace = 'global'){
    return (payload) => {
        return {
            type: `${stateNameSpace}_ERROR`,
            payload: {...payload, isLoading: false, isError: true},
            stateNameSpace
        }
    }
}

export function startFetchTemplate(stateNameSpace = 'global'){
    return (payload) => {
        return {
            type: `${stateNameSpace}_START`,
            payload: {...payload, isLoading: true, isError: false},
            stateNameSpace
        }
    }
}