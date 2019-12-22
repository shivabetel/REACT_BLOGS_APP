const initialState = {}
export function reducerTemplate(_stateNameSpace = 'global') {
    return (state = initialState, action) => {
        const { type, payload = { } } = action
        switch (type) {
            case `${_stateNameSpace}_START`: {
                return {
                    ...state,
                    ...payload
                }
            }
            case `${_stateNameSpace}_UPDATE`: {
                return {
                    ...state,
                    ...payload
                }
            }
            case `${_stateNameSpace}_ERROR`: {
                return {
                    ...state,
                    ...payload
                }
            }
            default: {
                return state
            }

        }
    }
}