import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from "../reducers";
import { SET_ON_PROGRESS } from "../data/constants";

const sagaMiddleware = createSagaMiddleware();

export default () => {
    let store = createStore(reducers, compose(
        applyMiddleware(sagaMiddleware)
    ));
    store.dispatch({
        type: SET_ON_PROGRESS,
        payload: false
    });
    return { store, sagaMiddleware };
}