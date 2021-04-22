import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { getOpenSurvey, AppState } from '../../store';
import { updateSurveyName } from 'src/app/store/surveys.actions';

@Component({
  selector: 'survey-dialog',
  templateUrl: './survey-dialog.component.html',
  styleUrls: ['./survey-dialog.component.scss'],
})
export class SurveyDialogComponent {
  survey$ = this.store.select(getOpenSurvey);
  surveyForm = new FormGroup({
    name: new FormControl(''),
    // questions: new FormArray([
    //   new FormGroup({
    //     text: new FormControl(''),
    //   }),
    // ]),
  });
  id: string | undefined;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.surveyForm.controls['name'].valueChanges.subscribe((value) => {
      if (this.id) {
        this.store.dispatch(
          updateSurveyName({ name: value, surveyId: this.id })
        );
      }
    });
    this.survey$.subscribe((data) => {
      if (data && this.id == null) {
        this.surveyForm.patchValue(data);
        this.id = data.id;
      }
    });
  }
}
