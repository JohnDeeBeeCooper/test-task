import * as types from './actionTypes';
import API from '../../api/index';

const fetchingData = () => {
    return {
        type: types.FETCHING_DATA,
    };
};
const fetchDataSuccess = data => {
    return {
        type: types.FETCHING_DATA_SUCCESS,
        payload: data
    };
};
const fetchDataFail = () => {
    return {
        type: types.FETCHING_DATA_FAILURE,
    };
};
const fetchData = (extra) => {
    return (dispatch) => {
        dispatch(fetchingData())
        API.get(extra)
            .then(res => {
                dispatch(fetchDataSuccess({ [`${extra}`]: res.data }));
            })
            .catch(err => { console.log(err) });
    };
};

export {
    fetchingData,
    fetchDataSuccess,
    fetchDataFail,
    fetchData
};