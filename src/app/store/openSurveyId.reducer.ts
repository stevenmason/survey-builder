import { createReducer, on } from '@ngrx/store';

import { updateOpenSurveyId } from './openSurveyId.actions';

export const openSurveyReducer = createReducer<string | undefined>(
  undefined,
  on(updateOpenSurveyId, (state, { id }) => id)
);
