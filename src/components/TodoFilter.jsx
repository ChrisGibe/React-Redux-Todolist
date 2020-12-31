import { connect } from 'react-redux'
import { setFilterAction } from '../store/filters/filterAction'
import { filterSelector } from '../store/filters/filterSelectors'

/**
 * Create the div with all the filters buttons
 * @param {Boolean || Null } value The value to switch between all the todos who are completed or not 
 * @param {Function} onChange A function for change the button value
 * @returns {Object} A div element with all the filters buttons
 */
export function TodoFilter({value, onChange}) {
    return <div className="filter">
        <button type="button" className="btn-filter" disabled={value === null} onClick={() => onChange(null)}>Aucun filtre</button>
        <button type="button" className="btn-filter" disabled={value === true} onClick={() => onChange(true)}>Complété</button>
        <button type="button" className="btn-filter" disabled={value === false} onClick={() => onChange(false)}>A faire</button>
    </div>
}

/**
 * Connect the TodoFilter to the store
 */
export const TodoFilterStore = connect(
    state => ({
        value: filterSelector(state)
    }),
    dispatch => ({
        onChange : (value) => dispatch(setFilterAction(value))
    })
)(TodoFilter)