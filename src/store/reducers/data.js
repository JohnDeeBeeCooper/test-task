import * as types from "../actions/actionTypes";

const initialState = {
  data: { customers: [], products: [], invoices: [] },
  isLoading: true,
  error: false,
  formOpen: false
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCHING_DATA:
      return {
        ...state,
        isLoading: true,
        data: state.data
      };
    case types.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...payload },
        isLoading: false
      };
    case types.FETCHING_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case types.OPEN_FORM:
      return {
        ...state,
        formOpen: !state.formOpen
      };
    default:
      return state;
  }
};
export default reducer;