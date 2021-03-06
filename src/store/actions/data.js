import * as types from "./actionTypes";
import API from "../../api/index";
import { getDataForm } from "./other";

const fetchDataSuccess = data => {
  return {
    type: types.FETCHING_DATA_SUCCESS,
    payload: data
  };
};
const fetchData = url => {
  return async dispatch => {
    const { data } = await API.get(url);
    dispatch(fetchDataSuccess({ [`${url}`]: data }));
  };
};
const getData = (url, id) => {
  return async dispatch => {
    const { data } = await API.get(`${url}/${id}`);
    dispatch(getDataForm(data));
  };
};
const deleteData = (url, id) => {
  return async dispatch => {
    await API.delete(`${url}/${id}`);
    dispatch(fetchData(url));
  };
};
const createData = (url, data) => {
  return async dispatch => {
    await API.post(url, { ...data });
    dispatch(fetchData(url));
  };
};
const updateData = (url, id, data) => {
  return async dispatch => {
    await API.put(`${url}/${id}`, { ...data });
    dispatch(fetchData(url));
  };
};

export {
  fetchDataSuccess,
  fetchData,
  deleteData,
  createData,
  updateData,
  getData
};
