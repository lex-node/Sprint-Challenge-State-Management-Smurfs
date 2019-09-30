import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL} from "../actions/getSmurfs";
import {POST_SMURFS_START, POST_SMURFS_SUCCESS, POST_SMURFS_FAIL} from "../actions/postSmurfs";

;

const reducer = (state /*=initialState*/, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state
            };
        case FETCH_SMURFS_FAIL:
            return {
                ...state
            };
        case POST_SMURFS_START:
            return {
                ...state
            };
        case POST_SMURFS_SUCCESS:
            return {
                ...state
            };
        case POST_SMURFS_FAIL:
            return {
                ...state
            };
        default:
            return state
    }
}


export default reducer;
