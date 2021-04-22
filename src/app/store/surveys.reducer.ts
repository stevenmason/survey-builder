import { createReducer, on } from '@ngrx/store';
import { cloneDeep, set, uniqueId } from 'lodash';
import { Action } from 'rxjs/internal/scheduler/Action';

import { Question, Surveys, Survey, Option } from '../app.types';
import {
  addOption,
  addQuestion,
  addSurvey,
  updateSurveyName,
  updateQuestionText,
  updateOptionText,
  closeSurvey,
} from './surveys.actions';

export const initialState: Surveys = {};

// TODO: normalize data
export const surveysReducer = createReducer(
  initialState,
  on(addSurvey, (state, { surveyId }) => {
    const questionId = uniqueId();
    const optionId = uniqueId();
    const defaultSurvey: Survey = {
      id: surveyId,
      name: '',
      isClosed: false,
      questions: {
        questionId: {
          id: questionId,
          text: '',
          options: {
            optionId: { id: optionId, text: '', isCorrectAnswer: false },
          },
        },
      },
    };

    return {
      ...state,
      [surveyId]: defaultSurvey,
    };
  }),
  on(closeSurvey, (state, { surveyId }) => {
    return set(cloneDeep(state), `${surveyId}.isClosed`, true);
  }),
  on(updateSurveyName, (state, { surveyId, name }) => {
    return set(cloneDeep(state), `${surveyId}.name`, name);
  }),

  on(addQuestion, (state, { surveyId }) => {
    const id = uniqueId();
    const optionId = uniqueId();

    const defaultQuestion: Question = {
      id,
      text: '',
      options: { optionId: { id: optionId, text: '', isCorrectAnswer: false } },
    };
    return set(
      cloneDeep(state),
      `${surveyId}.questions.${id}`,
      defaultQuestion
    );
  }),
  on(updateQuestionText, (state, { surveyId, questionId, text }) => {
    return set(
      cloneDeep(state),
      `${surveyId}.questions.${questionId}.text`,
      text
    );
  }),

  on(addOption, (state, { surveyId, questionId }) => {
    const id = uniqueId();

    const defaultOption: Option = { id, text: '', isCorrectAnswer: false };
    return set(
      cloneDeep(state),
      `${surveyId}.questions.${questionId}.options.${id}`,
      defaultOption
    );
  }),
  on(updateOptionText, (state, { surveyId, questionId, optionId, text }) => {
    return set(
      cloneDeep(state),
      `${surveyId}.questions.${questionId}.options.${optionId}.text`,
      text
    );
  })
);
