import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface GuessResult {
  number: number;
  result: string;
}

@Injectable()
export class NumberHelperService {
  constructor(private _fb: FormBuilder) {}

  getNumberForm() {
    return this._fb.group({
      number: [null, [Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }

  getRandomNumber(min: number = 1, max: number = 100) {
    if (min > 100) {
      return 100;
    }
    if (max < 1) {
      return 1;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  checkNumberWithGuess(targetNumber: number, guessNumber: number): GuessResult {
    const msg = guessNumber === targetNumber ? 'EQUAL' : guessNumber > targetNumber ? 'HIGHER' : 'LOWER';

    return {
      number: guessNumber,
      result: msg
    };
  }
  isLimit(val: number) {
    return val === 1 || val === 100;
  }
  validateRange(val: number) {
    return val >= 1 || val <= 100;
  }
}
