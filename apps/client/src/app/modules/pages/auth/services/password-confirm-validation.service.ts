import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class PasswordValidator {
  public validatePassword(controlName: string, confirmPassword: string): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const input = control.get(controlName);
      const matchingInput = control.get(confirmPassword);

      if (input == null || matchingInput === null) {
        return null;
      }

      if (matchingInput?.errors && !matchingInput.errors['passwordMismatch']) {
        return null;
      }

      if (input.value !== matchingInput.value) {
        matchingInput.setErrors({confirmedValidator: true});
        return ({confirmedValidator: true});
      } else {
        matchingInput.setErrors(null);
        return null;
      }
    };
  }
}
