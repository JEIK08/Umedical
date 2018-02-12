import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormService } from '../../../services/form.service';
import { GeneralValidator } from '../../../validators/general.validator';
import { Control } from '../control.component';

@Component({
  selector: 'app-input-numbers',
  templateUrl: './input-numbers.component.html',
  styleUrls: ['./input-numbers.component.css']
})
export class InputNumbersComponent extends Control{

	@Input('placeholder') placeholder: string;
	tooltip: boolean;
  formSubmitted: boolean;
  formService: FormService;

  constructor(private generalValidator: GeneralValidator) {
  	super();
  	this.placeholder = '';
  }

}
