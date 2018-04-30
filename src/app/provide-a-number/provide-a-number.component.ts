import { Component, OnInit } from '@angular/core';
import { NumberHelperService, GuessResult } from '../services';

@Component({
  selector: 'app-provide-a-number',
  templateUrl: './provide-a-number.component.html',
  styleUrls: ['./provide-a-number.component.scss']
})
export class ProvideANumberComponent implements OnInit {
  newGuess: number;
  lastGuess: GuessResult;
  constructor(private _numberHelper: NumberHelperService) {}

  ngOnInit() {}

  guessANumber() {
    this.newGuess = this._numberHelper.getRandomNumber();
    return this.newGuess;
  }

  isEqual() {
    alert('¡Gracias por jugar!');
  }

  goHigher() {
    debugger;
    const newNumber = this._numberHelper.getRandomNumber(this.newGuess + 1, 100);
    this.validateNumber(newNumber);
  }

  goLower() {
    debugger;
    const newNumber = this._numberHelper.getRandomNumber(1, this.newGuess - 1);
    this.validateNumber(newNumber);
  }

  private validateNumber(val: number) {
    const isValid = val >= 1 || val <= 100;
    if (!isValid) {
      alert('Recuerda: el número debe ser entre 1 y 100');
    } else {
      this.newGuess = val;
    }
    return isValid;
  }
}
