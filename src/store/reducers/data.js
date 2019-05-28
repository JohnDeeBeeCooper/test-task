import * as types from "../actions/actionTypes";
import update from "immutability-helper";

const initialState = {
  data: { customers: [], products: [], invoices: [] },
  formData: {},
  formOpen: false,
  modalOpen: false,
  deleteId: null
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCHING_DATA_SUCCESS:
      const { data } = state;
      return update(state, {
        data: { $set: { ...data, ...payload } },
        formData: { $set: {} }
      });
    //return newState;
    case types.OPEN_FORM:
      const { formOpen } = state;
      return update(state, {
        formOpen: { $set: !formOpen }
      });
    //return newState;
    case types.OPEN_MODAL:
      const { modalOpen } = state;
      return update(state, {
        modalOpen: { $set: !modalOpen },
        deleteId: { $set: payload }
      });
    //return newState;
    case types.GET_FORM_DATA:
      return update(state, { formData: { $set: payload } });
    //return newState;
    default:
      return state;
  }
};
export default reducer;
