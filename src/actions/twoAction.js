import {
    UPD_TWO_TYPE_CODE,
    UPD_TWO_INFO
} from 'constants'
export default {
    updTwoTypeCode() {
        return (dispatch) => {
            dispatch({
                type: UPD_TWO_TYPE_CODE,
                data: 1
            })
        }
    },
    updTwoInfo() {
        return (dispatch) => {
            dispatch({
                type: UPD_TWO_INFO,
                data: {

                }
            })
        }
    }
}