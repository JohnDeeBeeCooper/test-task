import * as types from "./actionTypes";

const openForm = action => ({
  type: types.OPEN_FORM,
  payload: action
});
const closeForm = () => ({
  type: types.CLOSE_FORM
});
const getDataForm = data => ({
  type: types.GET_FORM_DATA,
  payload: data
});
const openModal = id => ({
  type: types.OPEN_MODAL,
  payload: id
});
export { openForm, getDataForm, openModal, closeForm };
