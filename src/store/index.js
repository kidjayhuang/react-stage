import {
    applyMiddleware,
    createStore
} from 'redux'
import reducers from 'src/reducers'
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk';//解决异步dispatch的报错问题
import { createLogger } from 'redux-logger';

//devToolsEnhancer 一定要放在 applyMiddleware 前面，不然会报错
export default createStore(reducers, devToolsEnhancer(), applyMiddleware(thunk,createLogger()))