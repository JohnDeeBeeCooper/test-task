import * as types from "./actionTypes";
import API from "../../api/index";

const fetchingData = () => {
  return {
    type: types.FETCHING_DATA
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
    type: types.FETCHING_DATA_FAILURE
  };
};
const fetchData = url => {
  return dispatch => {
    dispatch(fetchingData());
    API.get(url)
      .then(res => {
        dispatch(fetchDataSuccess({ [`${url}`]: res.data }));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
const deleteData = (url, id) => {
  return dispatch => {
    API.delete(`${url}/${id}`).then(dispatch(fetchData(url)));
  };
};
const createProduct = (url, data) => {
  const { name, price } = data;
  console.log(name, price)
  return dispatch => {
    API.post(url, { name: name, price: price }).then(dispatch(fetchData(url)));
  };
};
export {
  fetchingData,
  fetchDataSuccess,
  fetchDataFail,
  fetchData,
  deleteData,
  createProduct
};
