import { getData, postData, putData, deleteData } from './index';
import { COMPANY_ERROR, CREATE_COMPANY, FETCH_COMPANY} from './types';

//= ===============================
// Customer actions
//= ===============================
export function createCompany(stripeToken, plan, lastFour) {
  const data = { stripeToken, plan, lastFour };
  const url = '/company';
  return dispatch => postData(CREATE_COMPANY, COMPANY_ERROR, true, url, dispatch, data);
}

export function fetchCompanies() {
  const url = '/company';
  return dispatch => getData(FETCH_COMPANY, COMPANY_ERROR, true, url, dispatch);
}
