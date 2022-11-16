import * as actionTypes from './actionTypes';

export const Token = (state = {
        token: undefined
    }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TOKEN:
            return { ...state, token: action.payload }
        
        default:
            return state;
    }
}