import * as types from "../actions/actionTypes";
import update from "immutability-helper";

const initialState = {
  data: { customers: [], products: [], invoices: [] },
  form: { formData: {}, isOpen: false, formAction: "CREATE" },
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
        form: { formData: { $set: {} } }
      });
    case types.OPEN_FORM:
      const {
        form: { isOpen }
      } = state;
      return update(state, {
        form: {
          isOpen: { $set: !isOpen },
          formAction: { $set: payload }
        }
      });
    case types.OPEN_MODAL:
      const { modalOpen } = state;
      return update(state, {
        modalOpen: { $set: !modalOpen },
        deleteId: { $set: payload }
      });
    case types.GET_FORM_DATA:
      return update(state, { form: { formData: { $set: payload } } });
    default:
      return state;
  }
};
export default reducer;
