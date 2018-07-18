import {
    UPD_ONE_TYPE_CODE,
    UPD_ONE_INFO
} from 'constants'
export default {
    updOneTypeCode() {
        return (dispatch) => {
            dispatch({
                type: UPD_ONE_TYPE_CODE,
                data: 1
            })
        }
    },
    updOneInfo() {
        return (dispatch) => {
            dispatch({
                type: UPD_ONE_INFO,
                data: {
                    name: 'oneReduce',
                    age: 666,
                }
            })
        }
    }
}