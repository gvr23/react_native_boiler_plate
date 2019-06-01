import {
    takeLatest,
    call,
    select,
    put,
    all,
    fork
} from 'redux-saga/effects';
import { LOG_IN } from "../data/constants";

function* login({ payload }) {
    try{
        console.log('heyeheyehey');
    } catch(error) {
        console.log('this is my login err: ', error);
    }
}

export default [
    takeLatest(LOG_IN, login)
]
