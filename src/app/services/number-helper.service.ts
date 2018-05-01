import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface GuessResult {
  number: number;
  result: string;
}
export const numberRange  = {
  minValue : 1,
  maxValue : 100
};

@Injectable()
export class NumberHelperService {
  constructor(private _fb: FormBuilder) {}

  getNumberForm() {
    return this._fb.group({
      number: [null, [Validators.required, Validators.min(numberRange.minValue), Validators.max(numberRange.maxValue)]]
    });
  }

  getRandomNumber(min: number = numberRange.minValue, max: number = numberRange.maxValue) {
    if (min > numberRange.maxValue) {
      return numberRange.maxValue;
    }
    if (max < numberRange.minValue) {
      return numberRange.minValue;
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
    return val === numberRange.minValue || val === numberRange.maxValue;
  }
  validateRange(val: number) {
    return val >= numberRange.minValue || val <= numberRange.maxValue;
  }
}
