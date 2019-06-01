import AppSaga from "./AppSaga";
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        ...AppSaga
    ])
}