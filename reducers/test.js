import { actionTypes } from '../actions'
import { HYDRATE } from 'next-redux-wrapper'
const initialState = {
    count: 0,
    error: false,
    lastUpdate: 0,
    light: false,
    placeholderData: null,
    otherData: null
}
function reducer(state = initialState, action) {
    console.log(action.type, action.payload);
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.test }
        }
        case actionTypes.FAILURE:
            return {
                ...state,
                ...{ error: action.error },
            }
        case actionTypes.INCREMENT:
            return {
                ...state,
                ...{ count: state.count + 1 },
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                ...{ count: state.count - 1 },
            }
        case actionTypes.RESET:
            return {
                ...state,
                ...{ count: initialState.count },
            }
        case actionTypes.LOAD_DATA_SUCCESS:
            return {
                ...state,
                ...{ placeholderData: action.data },
            }
        case actionTypes.SAVE_OTHER:
            return {
                ...state,
                ...{ otherData: action.payload }
            }
        case actionTypes.TICK_CLOCK:
            return {
                ...state,
                ...{ lastUpdate: action.ts, light: !!action.light },
            }
        default:
            return state
    }
}

export default reducer