import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';

import { Surveys } from '../app.types';
import { openSurveyReducer } from './openSurveyId.reducer';
import { surveysReducer } from './surveys.reducer';

export interface AppState {
  surveys: Surveys;
  openSurveyId: string | undefined;
}

export const reducers = {
  openSurveyId: openSurveyReducer,
  surveys: surveysReducer,
};

export const getSurveys = (state: AppState) => Object.values(state.surveys);
export const getOpenSurvey = (state: AppState) =>
  state.openSurveyId ? state.surveys[state.openSurveyId] : undefined;
