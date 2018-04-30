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

  getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
  }

  checkNumberWithGuess(targetNumber: number, guessNumber: number): GuessResult {
    let msg: string;
    if (guessNumber === targetNumber) {
      msg = 'EQUAL';
    } else if (guessNumber > targetNumber) {
      msg = 'HIGHER';
    } else {
      msg = 'LOWER';
    }
    return {
      number: guessNumber,
      result: msg
    };
  }
}
