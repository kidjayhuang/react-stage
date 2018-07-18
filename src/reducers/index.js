import {
    combineReducers
} from "redux";
import oneReducer from "src/reducers/oneReducer";
import twoReducer from "src/reducers/twoReducer";


export default combineReducers({
    oneReducer,
    twoReducer
});