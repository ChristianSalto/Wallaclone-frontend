import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import { connectRouter } from 'connected-react-router';


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ...reducers
});

const composedEnhancers = composeWithDevTools;

const configureMiddleware = config => {
    const middleware = [ReduxThunk.withExtraArgument(config), ReduxLogger];
   return middleware;
}

export function configureStore(config) {
    return function (preloadedState) {
        const reducer = createRootReducer(config.history)
        const middlewares = configureMiddleware(config);
        const store = createStore(
            reducer,
            preloadedState,
            composedEnhancers(applyMiddleware(...middlewares))
        );
        return store;
    };
}