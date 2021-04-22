import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { uniqueId } from 'lodash';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { Survey } from './app.types';
import { AppState, getSurveys } from './store';
import { updateOpenSurveyId } from './store/openSurveyId.actions';
import { addSurvey, closeSurvey } from './store/surveys.actions';
import { SurveyDialogComponent } from './components/survey-dialog/survey-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  surveys$ = this.store.select(getSurveys);

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  addSurvey() {
    const id = uniqueId();

    this.store.dispatch(addSurvey({ surveyId: id }));
    this.store.dispatch(updateOpenSurveyId({ id }));

    this.dialog.open(SurveyDialogComponent, {
      data: {},
      width: '80vw',
    });
  }

  editSurvey(id: string) {
    this.store.dispatch(updateOpenSurveyId({ id }));
    this.dialog.open(SurveyDialogComponent, {
      data: {},
      width: '80vw',
    });
  }

  closeSurvey(id: string) {
    this.store.dispatch(closeSurvey({ surveyId: id }));
  }
}
