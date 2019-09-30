import axios from 'axios';

export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAIL = 'POST_SMURFS_FAIL';

export const postSmurfs = (smurf) => dispatch => {
    dispatch({type: POST_SMURFS_START});
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            dispatch({
                type: POST_SMURFS_SUCCESS,
                payload: res.data
            })
                .catch(err => {
                    dispatch({
                        type: POST_SMURFS_FAIL,
                        payload: err
                    })
                })
        })
}