import { Component, OnInit } from '@angular/core';
import { NumberHelperService } from '../services';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guess-a-number',
  templateUrl: './guess-a-number.component.html',
  styleUrls: ['./guess-a-number.component.scss']
})
export class GuessANumberComponent implements OnInit {

  numberForm: FormGroup;
  constructor(private _numberHelper: NumberHelperService) { }

  ngOnInit() {
    this.numberForm = this._numberHelper.getNumberForm();
  }

  checkNumber() {
    debugger;
  }
}
