import {
    UPD_TWO_TYPE_CODE,
    UPD_TWO_INFO
} from 'constants'
let initState = {
    twoInfo: {
        name: 'twoPlus',
        age: 18,
    },
    typeCode: 0,
};

function twoInfo(state = initState, {
    type,
    data
}) {
    switch (type) {
        case UPD_TWO_TYPE_CODE:
            return { ...state,
                typeCode: data
            }
        case UPD_TWO_INFO:
            return { ...state,
                twoInfo: {
                    ...state.twoInfo,
                    data
                }
            }
        default:
            return state;
    }
}
export default twoInfo;