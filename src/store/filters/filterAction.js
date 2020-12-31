import { UPDATE_FILTER } from "./filterReducer";

/**
 * The actions that allow you to communicate with the store
 * @param {boolean || null} value The state of the filter reducer
 */
export const setFilterAction = (value) => ({
    type: UPDATE_FILTER, 
    payload:value
})