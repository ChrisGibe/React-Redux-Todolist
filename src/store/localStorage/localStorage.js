/**
 * Load the localStorage in the global state
 */
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('todos')
        if(serializedState === null) {
            return []
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

/**
 * Save the state in the localStorage
 * @param {Array} state The array of all the todos
 */
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.todos)
        localStorage.setItem('todos', serializedState)
    } catch (err) {
        console.log(err)
    }
}