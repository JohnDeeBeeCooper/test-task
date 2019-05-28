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
  return dispatch => {
    API.get(url)
      .then(res => {
        dispatch(fetchDataSuccess({ [`${url}`]: res.data }));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
const getData = (url, id) => {
  return dispatch => {
    API.get(`${url}/${id}`)
      .then(res => {
        dispatch(getDataForm(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
const deleteData = (url, id) => {
  return dispatch => {
    API.delete(`${url}/${id}`);
    dispatch(fetchData(url));
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
  fetchDataSuccess,
  fetchData,
  deleteData,
  createData,
  updateData,
  getData
};
