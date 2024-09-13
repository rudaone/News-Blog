import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import { watcherArticles } from './actionCreators/articlesActionCreators';
import { watcherBlogs } from './actionCreators/blogsActionCreators';
import { blogsReducer } from './reducers/blogsReducer';
import { articlesReducer } from './reducers/articlesReducers';
import { userReducer } from './reducers/userReducer';
import { watcherUser } from './actionCreators/userActionCreators';



const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
    yield all([
        watcherArticles(),
        watcherBlogs(),
        watcherUser(),
    ])
}

const store = createStore(
    combineReducers({
        articles: articlesReducer,
        blogs: blogsReducer,
        user: userReducer
    }), {},
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export { store }