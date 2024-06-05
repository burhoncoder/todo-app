import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormUtilitiesService {
  getErrorMessage(form: FormGroup, fieldName: string) {
    return (
      form.get(fieldName)?.errors?.['required'] &&
      form.get(fieldName)?.touched &&
      'Required'
    );
  }
}
