import { CREATE_TEMPLATE, TEMPLATE_ERROR, FETCH_TEMPLATE, FETCH_TEMPLATES } from '../actions/types';

const INITIAL_STATE = { error: '', tempalte: {}, tempaltes: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_TEMPLATE:
      return { ...state, template: action.payload.template };
    case FETCH_TEMPLATE:
      return { ...state, template: action.payload.template };
    case FETCH_TEMPLATES:
      return { ...state, templates: action.payload };
    case TEMPLATE_ERROR:
      return { ...state, error: action.payload };
  }

  return state;
}
