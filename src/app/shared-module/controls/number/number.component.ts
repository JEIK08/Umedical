import { Component, Input } from '@angular/core';

import { GeneralValidator } from '../../../validators/general.validator';
import { Control } from '../control.component';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent extends Control {

  @Input('placeholder') private placeholder: string;

  constructor(private generalValidator: GeneralValidator) {
  	super();
  	this.placeholder = '';
  }

}
