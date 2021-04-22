import { createAction, props } from '@ngrx/store';

export const addSurvey = createAction(
  '[Survey Component] Create Survey',
  props<{ surveyId: string }>()
);
export const closeSurvey = createAction(
  '[Survey Component] Close Survey',
  props<{ surveyId: string }>()
);
export const updateSurveyName = createAction(
  '[Survey Component] Update Survey Name',
  props<{ name: string; surveyId: string }>()
);

export const addQuestion = createAction(
  '[Survey Component] Add Question',
  props<{ surveyId: string }>()
);
export const updateQuestionText = createAction(
  '[Survey Component] Update Question Text',
  props<{ text: string; surveyId: string; questionId: string }>()
);

export const updateOptionText = createAction(
  '[Survey Component] Update Option Text',
  props<{
    text: string;
    surveyId: string;
    questionId: string;
    optionId: string;
  }>()
);
export const addOption = createAction(
  '[Survey Component] Add Option',
  props<{
    surveyId: string;
    questionId: string;
  }>()
);
