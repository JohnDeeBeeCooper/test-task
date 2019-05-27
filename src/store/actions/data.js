import * as types from "./actionTypes";
import API from "../../api/index";
import { getDataForm } from "./form";

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
        dispatch(fetchDataFail());
      });
  };
};
const getData = (url, id) => {
  return dispatch => {
    API.get(`${url}/${id}`).then(res => {
      console.log(res.data);
      dispatch(getDataForm(res.data));
    });
  };
};
const deleteData = (url, id) => {
  return dispatch => {
    API.delete(`${url}/${id}`).then(dispatch(fetchData(url)));
  };
};
const createData = (url, data) => {
  return dispatch => {
    API.post(url, { ...data }).then(dispatch(fetchData(url)));
  };
};
const updateData = (url, id, data) => {
  return dispatch => {
    API.put(`${url}/${id}`, { ...data }).then(dispatch(fetchData(url)));
  };
};

export {
  fetchingData,
  fetchDataSuccess,
  fetchDataFail,
  fetchData,
  deleteData,
  createData,
  updateData,
  getData
};
