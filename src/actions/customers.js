import { getData, postData, putData, deleteData } from './index';
import { CUSTOMER_ERROR, CREATE_CUSTOMER, FETCH_CUSTOMERS } from './types';

//= ===============================
// Customer actions
//= ===============================
export function createCustomer(stripeToken, plan, lastFour) {
  const data = { stripeToken, plan, lastFour };
  const url = '/customers';
  return dispatch => postData(CREATE_CUSTOMER, CUSTOMER_ERROR, true, url, dispatch, data);
}

export function fetchCustomers() {
  const url = '/customers';
  return dispatch => getData(FETCH_CUSTOMERS, CUSTOMER_ERROR, true, url, dispatch);
}
