import { Component, OnInit } from '@angular/core';
import { NumberHelperService, GuessResult, numberRange } from '../services';

@Component({
  selector: 'app-provide-a-number',
  templateUrl: './provide-a-number.component.html',
  styleUrls: ['./provide-a-number.component.scss']
})
export class ProvideANumberComponent implements OnInit {
  private _guesses: number[] = [];
  private _newGuess: number;
  public get newGuess(): number {
    return this._newGuess;
  }
  public set newGuess(v: number) {
    this._guesses.push(v);
    this._newGuess = v;
  }
  success = false;
  lastGuess: GuessResult;
  constructor(private _numberHelper: NumberHelperService) {}

  ngOnInit() {}

  guessANumber() {
    this._guesses = [];
    this.success = false;
    this.newGuess = this._numberHelper.getRandomNumber();
  }

  isEqual() {
    this.success = true;
  }

  goHigher() {
    this.newGuess = this._getValidNumber(this.newGuess + 1, numberRange.maxValue);
  }

  goLower() {
    this.newGuess = this._getValidNumber(numberRange.minValue, this.newGuess - 1);
  }
  private _getValidNumber(min: number, max: number) {
    const newVal = this._numberHelper.getRandomNumber(min, max);
    if (this._numberHelper.validateRange(newVal) && (!this._isAlreadyGuessed(newVal) || this._numberHelper.isLimit(newVal))) {
      return newVal;
    }
    return this._getValidNumber(min, max);
  }

  private _isAlreadyGuessed(val: number) {
    return this._guesses.includes(val);
  }
}
