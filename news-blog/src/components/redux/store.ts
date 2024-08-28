import { createStore, combineReducers, applyMiddleware } from 'redux';
import { articlesReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import { watcherArticles} from './actionCreators';

export default createStore(
    combineReducers({
        articles: articlesReducer,
    }),
);

const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
    yield all([
        watcherArticles(),
    ])
}

const store = createStore(
    combineReducers({
        articles: articlesReducer,

    }), {},
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export { store }