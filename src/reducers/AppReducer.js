import { LOG_IN, SET_ON_PROGRESS } from "../data/constants";

const INITIAL_STATE = {
    isLogged: false,
    onProgress: false,
    userId: '',
    userToken: ''
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case LOG_IN: {
            return {
                ...state,
                isLogged: payload
            }
        }
        case SET_ON_PROGRESS:
            return {
                ...state,
                onProgress: payload
            }
        default:
            return state;
    }
};