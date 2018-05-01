import { Component, OnInit } from '@angular/core';
import { NumberHelperService, GuessResult } from '../services';
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
    this.guessResult = this._numberHelper.checkNumberWithGuess(this.numberToGuess, guess);
  }
  giveUp() {
    alert(this.numberToGuess);
  }
}
