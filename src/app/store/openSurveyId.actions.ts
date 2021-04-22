import { createAction, props } from '@ngrx/store';

export const updateOpenSurveyId = createAction(
  '[Open Survey Id Component] Create',
  props<{ id?: string }>()
);
