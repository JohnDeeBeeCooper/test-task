import * as types from "./actionTypes";

const openForm = () => ({
  type: types.OPEN_FORM
});
const editForm = data => ({
  type: types.EDIT_FORM,
  payload: data
});
const getDataForm = data => ({
  type: types.GET_FORM_DATA,
  payload: data
});
const openModal = id => ({
  type: types.OPEN_MODAL,
  payload: id
});
export { openForm, editForm, getDataForm, openModal };
