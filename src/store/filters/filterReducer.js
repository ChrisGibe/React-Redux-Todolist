export const UPDATE_FILTER = 'UPDATE_FILTER'

/**
 * A reducer to return the action for our filter
 * @param {boolean || null} state our state 
 * @param {object} action on object with the type of action and the payload
 * @returns True || False || Null, depend of the action inside the payload
 */
export function filterReducer(state = null, action) {
    switch (action.type){
        case UPDATE_FILTER:
            return action.payload
        default: 
        return state
    }
}