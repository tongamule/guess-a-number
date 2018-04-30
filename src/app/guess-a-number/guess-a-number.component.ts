import { Component, OnInit } from '@angular/core';
import { NumberHelperService } from '../services';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guess-a-number',
  templateUrl: './guess-a-number.component.html',
  styleUrls: ['./guess-a-number.component.scss']
})
export class GuessANumberComponent implements OnInit {
  guessResult: GuessResult;
  numberForm: FormGroup;
  numberToGuess: number;
  constructor(private _numberHelper: NumberHelperService) {}

  ngOnInit() {
    this.numberForm = this._numberHelper.getNumberForm();
    this.numberToGuess = this._numberHelper.getRandomNumber();
  }

  checkNumber() {
    const guess: number = this.numberForm.value.number;
    const result = this._numberHelper.checkNumberWithGuess(this.numberToGuess, guess);
    this.guessResult = {
      number: guess,
      result: result
    };
  }
  giveUp() {
    alert(this.numberToGuess);
  }
}

interface GuessResult {
  number: number;
  result: string;
}
