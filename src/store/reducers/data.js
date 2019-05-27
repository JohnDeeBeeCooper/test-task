import * as types from "../actions/actionTypes";

const initialState = {
  data: { customers: [], products: [], invoices: [] },
  isLoading: true,
  formData: {},
  error: false,
  formOpen: false
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCHING_DATA:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...payload },
        isLoading: false,
        formData: {}
      };
    case types.FETCHING_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        formData: {}
      };
    case types.OPEN_FORM:
      return {
        ...state,
        formOpen: !state.formOpen
      };
    case types.GET_FORM_DATA:
      return { ...state, formData: payload };
    default:
      return state;
  }
};
export default reducer;
