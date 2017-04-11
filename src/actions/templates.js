import { getData, postData, putData, deleteData } from './index';
import { TEMPLATE_ERROR, CREATE_TEMPLATE, FETCH_TEMPLATES } from './types';

//= ===============================
// Customer actions
//= ===============================
export function createCustomer(stripeToken, plan, lastFour) {
  const data = { stripeToken, plan, lastFour };
  const url = '/templates';
  return dispatch => postData(CREATE_TEMPLATE, TEMPLATE_ERROR, true, url, dispatch, data);
}

export function fetchCustomers() {
  const url = '/templates';
  return dispatch => getData(FETCH_TEMPLATES, TEMPLATE_ERROR, true, url, dispatch);
}
