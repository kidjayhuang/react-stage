import {
    UPD_ONE_TYPE_CODE,
    UPD_ONE_INFO
} from 'constants'

let initState = {
    oneInfo: {
        name: 'onePlus',
        age: 18,
    },
    typeCode: 0,
};

function oneInfo(state = initState, {
    type,
    data
}) {
    switch (type) {
        case UPD_ONE_TYPE_CODE:
            return { ...state,
                typeCode: data
            }
        case UPD_ONE_INFO:

            return { ...state,
                oneInfo: {
                    ...state.oneInfo,
                    ...data
                }
            }
        default:
    console.log('oneInfo')

            return state;
    }
}
export default oneInfo;