import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class NumberHelperService {
  constructor(private _fb: FormBuilder) {}

  getNumberForm() {
    return this._fb.group({
      number: [null, [Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
  }

  checkNumberWithGuess(targetNumber: number, guessNumber: number) {
    if (guessNumber === targetNumber) {
      return 'EQUAL';
    } else if (guessNumber > targetNumber) {
      return 'HIGHER';
    } else {
      return 'LOWER';
    }
  }
}
