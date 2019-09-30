import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL} from "../actions/getSmurfs";
import {POST_SMURFS_START, POST_SMURFS_SUCCESS, POST_SMURFS_FAIL} from "../actions/postSmurfs";

const initialState = {
    smurfs: [{}]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                isPosting: false
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                isPosting: false
            };
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                isFetching: false,
                isPosting: false
            };
        case POST_SMURFS_START:
            return {
                ...state,
                isFetching: false,
                isPosting: true
            };
        case POST_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isPosting: false
            };
        case POST_SMURFS_FAIL:
            return {
                ...state,
                isFetching: false,
                isPosting: false
            };
        default:
            return state
    }
}


export default reducer;
