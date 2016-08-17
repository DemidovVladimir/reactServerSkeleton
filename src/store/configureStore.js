import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
//import { sampleEnhancer } from '../enhancers/sample'

export default function configureStore(initialState){
    const logger = createLogger();
    const store = createStore(
      rootReducer,
      initialState,
      process.env['NODE_ENV'] === 'development' ?
      applyMiddleware(thunk, logger) :
      applyMiddleware(thunk)
    );

    if (module.hot){
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
